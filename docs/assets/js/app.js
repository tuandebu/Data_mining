'use strict';

const YEARS = ['2023','2024','2025'];
const DATA = window.NEURIPS_DEMO_DATA || null;
const state = {
  summary:null,
  topics:[],
  repsByTopic:new Map(),
  evidence:null,
  model:null,
  trajectory:[],
  selectedTopicId:null,
  currentFilter:'all',
  search:'',
  evidenceMode:'endpoint'
};

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', debounce(()=>Plotly.Plots.resize(document.querySelectorAll('.js-plotly-plot')), 150));

document.querySelectorAll('[data-bs-toggle="pill"]').forEach(btn=>{
  btn.addEventListener('shown.bs.tab',()=>{
    setTimeout(()=>Plotly.Plots.resize(document.querySelectorAll('.js-plotly-plot')),80);
  });
});

function init(){
  if(!DATA){
    document.body.insertAdjacentHTML('afterbegin','<div class="container my-3"><div class="error-box">Cannot find embedded demo data. Check assets/js/demo_data.js.</div></div>');
    return;
  }
  state.summary = DATA.summary;
  state.topics = (DATA.topics?.topics || []).map(normalizeTopic);
  state.repsByTopic = makeRepsMap(DATA.representatives);
  state.evidence = DATA.evidence;
  state.model = DATA.model;
  state.trajectory = DATA.trajectory?.trajectory_counts || [];
  state.selectedTopicId = state.topics[0]?.topic_id ?? null;

  renderHeader();
  renderCards();
  renderValidity();
  renderModelTable();
  renderTrends();
  renderEvidence();
  renderTopicsTable();
  renderInspector(state.selectedTopicId);
  renderDownloads();
  bindControls();
  setTimeout(()=>Plotly.Plots.resize(document.querySelectorAll('.js-plotly-plot')),250);
}

function normalizeTopic(t){
  const years = t.years || {};
  for(const y of YEARS){ if(!years[y]) years[y]={accepted_share_pct:0, accepted_count:null}; }
  return {
    ...t,
    topic_id:Number(t.topic_id),
    size_total:Number(t.size_total||0),
    delta_23_24_pct_points:Number(t.delta_23_24_pct_points||0),
    delta_24_25_pct_points:Number(t.delta_24_25_pct_points||0),
    delta_23_25_pct_points:Number(t.delta_23_25_pct_points||0),
    z_rating:Number(t.z_rating||0),
    avg_rating:toNumberOrNull(t.avg_rating),
    prestige_concentration:toNumberOrNull(t.prestige_concentration),
    years
  };
}
function makeRepsMap(payload){ const m=new Map(); for(const row of payload?.representatives||[]) m.set(Number(row.topic_id), row.papers||[]); return m; }
function $(id){return document.getElementById(id)}
function fmt(v,d=2){ const n=Number(v); return Number.isFinite(n)?n.toFixed(d):'—'; }
function fmtInt(v){ const n=Number(v); return Number.isFinite(n)?n.toLocaleString('en-US'):'—'; }
function fmtSigned(v,d=2){ const n=Number(v); if(!Number.isFinite(n))return'—'; return `${n>=0?'+':''}${n.toFixed(d)}`; }
function pval(v){ const n=Number(v); if(!Number.isFinite(n))return'—'; return n<0.001?n.toExponential(2):n.toFixed(4); }
function esc(s){ return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function attr(s){ return esc(s); }
function toNumberOrNull(v){ const n=Number(v); return Number.isFinite(n)?n:null; }
function debounce(fn,ms){ let t; return (...args)=>{clearTimeout(t); t=setTimeout(()=>fn(...args),ms);}; }

function renderHeader(){
  $('projectTitle').textContent = state.summary.project_title || 'NeurIPS Review-Guided Trend Mining';
  $('projectSubtitle').textContent = state.summary.subtitle || 'Accepted-corpus topic trends and review evidence.';
  $('githubLinkTop').href = state.summary.repo_url || 'https://github.com/tuandebu/Data_mining';
  $('hfLinkTop').href = state.summary.hf_dataset_url || 'https://huggingface.co/datasets/tuandebu/data_mining/tree/main';
}
function renderCards(){
  const h=state.summary.headline_finding||{};
  const cards=[
    ['Public records', fmtInt(state.summary.public_records_total), 'OpenReview records crawled'],
    ['Accepted papers', fmtInt(state.summary.accepted_papers_total), 'Main analysis corpus'],
    ['Topics', fmtInt(state.summary.topics_total), 'BERTopic after outlier reduction'],
    ['Review–trend Pearson r', fmt(h.pearson_r,3), `p = ${pval(h.pearson_p)}`]
  ];
  $('summaryCards').innerHTML = cards.map(([label,value,note])=>`<div class="col-md-6 col-xl-3"><div class="card metric-card border-0 shadow-sm h-100"><div class="card-body"><div class="metric-label">${esc(label)}</div><div class="metric-value">${esc(value)}</div><div class="metric-note">${esc(note)}</div></div></div></div>`).join('');
}
function renderValidity(){
  $('validityText').innerHTML = `<strong>${esc(state.summary.validity_banner_title || 'Accepted-corpus analysis only')}</strong><br>${esc(state.summary.validity_banner_text || 'Public rejected submissions are incomplete. Do not interpret visible ratios as topic acceptance rates.')}`;
}
function renderModelTable(){
  const rows=(state.model?.models||[]).map(m=>`<tr><td>${esc(m.model)}</td><td>${fmtInt(m.topics)}</td><td>${fmt(m.outlier_rate,3)}</td><td>${fmt(m.diversity,3)}</td><td>${fmt(m.c_npmi,3)}</td><td>${fmt(m.c_v,3)}</td></tr>`).join('');
  $('modelTable').innerHTML = `<div class="table-responsive"><table class="table table-sm table-bordered mb-0"><thead class="table-light"><tr><th>Model</th><th>Topics</th><th>Outlier</th><th>Diversity</th><th>c-NPMI</th><th>c<sub>v</sub></th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderTrends(){
  renderDecompositionChart();
  renderQuadrantChart();
  renderTrajectoryCountsChart();
}
function topMovers(n=14){
  const sorted = [...state.topics].sort((a,b)=>b.delta_23_25_pct_points-a.delta_23_25_pct_points);
  const rising = sorted.slice(0,Math.ceil(n/2));
  const declining = sorted.slice(-Math.floor(n/2));
  return [...rising, ...declining].sort((a,b)=>a.delta_23_25_pct_points-b.delta_23_25_pct_points);
}
function renderDecompositionChart(){
  const rows=topMovers(14);
  const labels=rows.map(t=>t.label);
  const d1=rows.map(t=>t.delta_23_24_pct_points);
  const d2=rows.map(t=>t.delta_24_25_pct_points);
  Plotly.newPlot('decompositionChart',[
    {type:'bar',orientation:'h',name:'2023→2024',y:labels,x:d1,marker:{color:'#2563eb'},hovertemplate:'%{y}<br>2023→2024: %{x:.2f} pp<extra></extra>'},
    {type:'bar',orientation:'h',name:'2024→2025',y:labels,x:d2,marker:{color:'#f97316'},hovertemplate:'%{y}<br>2024→2025: %{x:.2f} pp<extra></extra>'}
  ],{barmode:'relative',margin:{l:220,r:30,t:25,b:55},xaxis:{title:'Accepted-paper share change (percentage points)',zeroline:true,zerolinewidth:2,zerolinecolor:'#111827'},yaxis:{automargin:true},legend:{orientation:'h',y:1.08},hovermode:'closest'}, {responsive:true, displaylogo:false});
}
function renderQuadrantChart(){
  const pts=state.topics;
  const sizes=pts.map(t=>8+Math.sqrt(Math.max(1,t.size_total))*0.55);
  Plotly.newPlot('quadrantChart',[
    {type:'scatter',mode:'markers',name:'Topics',x:pts.map(t=>t.delta_23_24_pct_points),y:pts.map(t=>t.delta_24_25_pct_points),text:pts.map(t=>t.label),customdata:pts.map(t=>[t.topic_id]),marker:{size:sizes,opacity:.78,color:'#2563eb',line:{width:1,color:'#1f2937'}},hovertemplate:'<b>%{text}</b><br>Δ23→24=%{x:.2f} pp<br>Δ24→25=%{y:.2f} pp<extra></extra>'}
  ],{margin:{l:70,r:25,t:30,b:70},xaxis:{title:'Δ23→24 accepted-paper share (pp)',zeroline:true,zerolinewidth:2,zerolinecolor:'#94a3b8'},yaxis:{title:'Δ24→25 accepted-paper share (pp)',zeroline:true,zerolinewidth:2,zerolinecolor:'#94a3b8'},annotations:quadrantAnnotations()}, {responsive:true, displaylogo:false});
  const el=$('quadrantChart');
  el.on('plotly_click', e=>{ const id=e.points?.[0]?.customdata?.[0]; if(id!==undefined){selectTopic(Number(id));} });
}
function quadrantAnnotations(){
  return [
    {x:0.98,y:0.98,xref:'paper',yref:'paper',text:'consistent growth',showarrow:false,font:{size:12,color:'#047857'}},
    {x:0.02,y:0.02,xref:'paper',yref:'paper',text:'consistent decline',showarrow:false,font:{size:12,color:'#b91c1c'}},
    {x:0.02,y:0.98,xref:'paper',yref:'paper',text:'rebound',showarrow:false,font:{size:12,color:'#0f766e'}},
    {x:0.98,y:0.02,xref:'paper',yref:'paper',text:'spike / plateau / reversal',showarrow:false,font:{size:12,color:'#92400e'}}
  ];
}
function renderTrajectoryCountsChart(){
  const rows=[...(state.trajectory||[])].sort((a,b)=>a.n_topics-b.n_topics);
  Plotly.newPlot('trajectoryCountsChart',[{x:rows.map(r=>r.n_topics),y:rows.map(r=>r.trajectory_type),type:'bar',orientation:'h',marker:{color:'#2563eb'},hovertemplate:'%{y}: %{x} topics<extra></extra>'}],{margin:{l:200,r:30,t:25,b:55},xaxis:{title:'Number of topics'},yaxis:{automargin:true}}, {responsive:true, displaylogo:false});
}

function renderEvidence(){
  const mode=state.evidenceMode;
  const ev=state.evidence?.[mode] || {};
  const pts=ev.points || [];
  const traces=[];
  if(mode==='transition'){
    ['2023→2024','2024→2025'].forEach((tr,idx)=>{
      traces.push(evidenceTrace(pts.filter(p=>p.transition===tr), tr, idx===0?'circle':'triangle-up'));
    });
  } else {
    traces.push(evidenceTrace(pts,'Topics','circle'));
  }
  if(ev.fit?.x_grid?.length){
    if(ev.fit.ci_high?.length && ev.fit.ci_low?.length){
      traces.push({x:ev.fit.x_grid,y:ev.fit.ci_high,type:'scatter',mode:'lines',line:{width:0},showlegend:false,hoverinfo:'skip'});
      traces.push({x:ev.fit.x_grid,y:ev.fit.ci_low,type:'scatter',mode:'lines',fill:'tonexty',fillcolor:'rgba(37,99,235,.14)',line:{width:0},name:'95% band',hoverinfo:'skip'});
    }
    traces.push({x:ev.fit.x_grid,y:ev.fit.y_hat,type:'scatter',mode:'lines',name:'Linear fit',line:{color:'#111827',width:2,dash:'dash'},hovertemplate:'fit: %{y:.3f}<extra></extra>'});
  }
  const layout={
    margin:{l:75,r:25,t:35,b:75},
    hovermode:'closest',
    xaxis:{title:mode==='endpoint'?'Accepted-paper share change, 2025−2023 (percentage points)':'Adjacent-year accepted-paper share change (percentage points)',zeroline:true,zerolinewidth:2,zerolinecolor:'#94a3b8'},
    yaxis:{title:'Year-normalized reviewer rating',zeroline:true,zerolinewidth:2,zerolinecolor:'#94a3b8'},
    legend:{orientation:'h',y:1.08}
  };
  Plotly.newPlot('evidenceChart', traces, layout, {responsive:true, displaylogo:false});
  $('evidenceChart').on('plotly_click', e=>{ const id=e.points?.[0]?.customdata?.[0]; if(id!==undefined){selectTopic(Number(id));} });
  renderEvidenceStats();
}
function evidenceTrace(pts,name,symbol){
  return {type:'scatter',mode:'markers',name,x:pts.map(p=>p.x),y:pts.map(p=>p.y),text:pts.map(p=>p.transition?`${p.label} (${p.transition})`:p.label),customdata:pts.map(p=>[p.topic_id]),marker:{symbol,size:pts.map(p=>9+Math.sqrt(Math.max(1,p.size))*0.48),opacity:.78,line:{width:1,color:'#1f2937'}},hovertemplate:'<b>%{text}</b><br>share change: %{x:.2f} pp<br>z rating: %{y:.3f}<extra></extra>'};
}
function renderEvidenceStats(){
  const stats = state.evidence?.[state.evidenceMode]?.stats || {};
  const items = state.evidenceMode==='endpoint'
    ? [['Pearson r',fmt(stats.pearson_r,3),`p=${pval(stats.pearson_p)}`],['Spearman ρ',fmt(stats.spearman_rho,3),`p=${pval(stats.spearman_p)}`],['Controlled OLS β',fmt(stats.ols_rating_coef_delta_on_rating,3),`p=${pval(stats.ols_p)}`],['Bootstrap 95% CI',`[${fmt(stats.bootstrap_ci?.[0],2)}, ${fmt(stats.bootstrap_ci?.[1],2)}]`,'rating coefficient']]
    : [['Transition Pearson r',fmt(stats.pearson_r,3),`p=${pval(stats.pearson_p)}`],['Transition Spearman ρ',fmt(stats.spearman_rho,3),`p=${pval(stats.spearman_p)}`],['Transition OLS β',fmt(stats.regression_coef,3),`p=${pval(stats.regression_p)}`],['Weighted transition β',fmt(stats.weighted_regression_coef,3),`p=${pval(stats.weighted_regression_p)}`]];
  $('evidenceStats').innerHTML=items.map(([a,b,c])=>`<div class="col-md-6 col-xl-3"><div class="stat-pill"><div class="stat-label">${esc(a)}</div><div class="stat-value">${esc(b)}</div><div class="small text-secondary">${esc(c)}</div></div></div>`).join('');
}

function bindControls(){
  document.querySelectorAll('[data-evidence-mode]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-evidence-mode]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    state.evidenceMode=btn.dataset.evidenceMode;
    renderEvidence();
  }));
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    state.currentFilter=btn.dataset.filter;
    renderTopicsTable();
  }));
  $('topicSearch').addEventListener('input', debounce(e=>{state.search=e.target.value.trim().toLowerCase(); renderTopicsTable();},120));
}
function filteredTopics(){
  let arr=state.topics.filter(t=>{
    if(state.currentFilter==='rising' && t.delta_23_25_pct_points<=0) return false;
    if(state.currentFilter==='declining' && t.delta_23_25_pct_points>=0) return false;
    if(state.currentFilter==='llm' && !/llm|language|reasoning|safety|alignment|lora|attention|hallucination/i.test(t.label)) return false;
    if(state.currentFilter==='highRatedDeclining' && !(t.delta_23_25_pct_points<0 && t.z_rating>0)) return false;
    if(state.search){
      const hay=[t.label,t.trajectory_type,t.interpretation,(t.keywords||[]).join(' ')].join(' ').toLowerCase();
      if(!hay.includes(state.search)) return false;
    }
    return true;
  });
  return arr.sort((a,b)=>b.delta_23_25_pct_points-a.delta_23_25_pct_points);
}
function renderTopicsTable(){
  const rows=filteredTopics().map(t=>`<tr data-topic-id="${t.topic_id}"><td>${esc(t.label)}</td><td>${fmtInt(t.size_total)}</td><td>${fmt(t.years['2023'].accepted_share_pct,2)}</td><td>${fmt(t.years['2024'].accepted_share_pct,2)}</td><td>${fmt(t.years['2025'].accepted_share_pct,2)}</td><td>${fmtSigned(t.delta_23_25_pct_points,2)}</td><td>${fmt(t.z_rating,3)}</td><td>${esc(t.trajectory_type)}</td><td><button class="btn btn-sm btn-primary" data-topic-id="${t.topic_id}">View</button></td></tr>`).join('');
  document.querySelector('#topicsTable tbody').innerHTML = rows || '<tr><td colspan="9" class="text-secondary">No topics match this filter.</td></tr>';
  document.querySelector('#topicsTable tbody').onclick = (e)=>{const b=e.target.closest('[data-topic-id]'); const row=e.target.closest('tr[data-topic-id]'); const id=Number(b?.dataset.topicId || row?.dataset.topicId); if(Number.isFinite(id)) selectTopic(id,false);};
}
function selectTopic(id,scroll=true){ state.selectedTopicId=id; renderInspector(id); if(scroll) $('topics').scrollIntoView({behavior:'smooth',block:'start'}); }
function renderInspector(id){
  const t=state.topics.find(x=>Number(x.topic_id)===Number(id));
  if(!t) return;
  $('inspectorTitle').textContent=t.label;
  $('inspectorMeta').textContent=`Size ${fmtInt(t.size_total)} · Δ net ${fmtSigned(t.delta_23_25_pct_points,2)} pp · z rating ${fmt(t.z_rating,3)} · ${t.trajectory_type}`;
  $('keywordChips').innerHTML=(t.keywords||[]).slice(0,8).map(k=>`<span class="keyword-chip">${esc(k)}</span>`).join('');
  $('topicInterpretation').textContent=t.interpretation || 'No interpretation note available.';
  renderTopicShareChart(t);
  renderTopicDeltaChart(t);
  renderRepresentativePapers(t);
}
function renderTopicShareChart(t){
  Plotly.newPlot('topicShareChart',[{x:YEARS,y:YEARS.map(y=>t.years[y].accepted_share_pct),type:'scatter',mode:'lines+markers',line:{color:'#2563eb',width:3},marker:{size:9},hovertemplate:'%{x}: %{y:.2f}%<extra></extra>'}],{margin:{l:55,r:10,t:20,b:40},xaxis:{title:'Year'},yaxis:{title:'Share (%)'}}, {responsive:true,displayModeBar:false});
}
function renderTopicDeltaChart(t){
  Plotly.newPlot('topicDeltaChart',[{x:['23→24','24→25','23→25'],y:[t.delta_23_24_pct_points,t.delta_24_25_pct_points,t.delta_23_25_pct_points],type:'bar',marker:{color:['#2563eb','#f97316','#111827']},hovertemplate:'%{x}: %{y:.2f} pp<extra></extra>'}],{margin:{l:55,r:10,t:20,b:40},yaxis:{title:'Δ share (pp)',zeroline:true,zerolinewidth:2,zerolinecolor:'#94a3b8'}}, {responsive:true,displayModeBar:false});
}
function renderRepresentativePapers(t){
  const papers=state.repsByTopic.get(Number(t.topic_id)) || [];
  if(!papers.length){ $('representativePapers').innerHTML='<div class="text-secondary small">No representative papers found for this topic.</div>'; return; }
  $('representativePapers').innerHTML = papers.slice(0,5).map(p=>{
    const url=p.openreview_url && p.openreview_url!=='unspecified'?p.openreview_url:null;
    return `<div class="paper-card"><div class="paper-title">${esc(p.title)}</div><div class="paper-meta">${esc(p.year || 'year ?')} · ${esc(p.decision_tier || 'tier unspecified')} · raw rating ${fmt(p.avg_rating,2)} · topic prob ${fmt(p.topic_prob,2)}</div><div class="mt-2">${url?`<a href="${attr(url)}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-primary">OpenReview</a>`:'<span class="badge text-bg-light border">OpenReview URL unavailable</span>'}</div></div>`;
  }).join('');
}
function renderDownloads(){
  const d=state.summary.downloads||{};
  const tiles=[
    ['Final report','PDF write-up used for grading',state.summary.report_pdf_url],
    ['Topic statistics','CSV for topic-level/yearly shares',d.topic_statistics_csv],
    ['Representative papers','CSV for qualitative validation',d.representatives_csv],
    ['Transition results','Adjacent-year robustness CSV',d.transition_results_csv],
    ['Core checksums','Server-output provenance',d.checksums_txt],
    ['GitHub repository','Source code and demo','https://github.com/tuandebu/Data_mining'],
    ['Hugging Face dataset','Data/artifact hosting','https://huggingface.co/datasets/tuandebu/data_mining/tree/main']
  ];
  $('downloadCards').innerHTML=tiles.map(([title,desc,href])=>`<div class="col-md-6 col-xl-3"><div class="download-tile"><h3>${esc(title)}</h3><p class="small text-secondary">${esc(desc)}</p><a class="btn btn-sm btn-outline-primary" href="${attr(href || '#')}" target="_blank" rel="noopener">Open</a></div></div>`).join('');
}
