const DATA = {
  summary: './data/summary.json',
  topics: './data/topics.json',
  reps: './data/representatives.json',
  evidence: './data/evidence.json',
  model: './data/model_diagnostics.json',
  trajectory: './data/trajectory_counts.json'
};

const YEARS = ['2023', '2024', '2025'];
const state = {
  summary: null,
  topics: [],
  reps: new Map(),
  evidence: null,
  model: null,
  trajectory: [],
  table: null,
  selectedTopicId: null,
  currentFilter: 'all',
  evidenceMode: 'endpoint'
};

const $ = (id) => document.getElementById(id);

window.addEventListener('DOMContentLoaded', main);
window.addEventListener('resize', debounce(() => {
  for (const id of ['evidenceChart','decompositionChart','quadrantChart','trajectoryCountsChart','topicShareChart','topicDeltaChart']) {
    const el = $(id);
    if (el && el.data) Plotly.Plots.resize(el);
  }
}, 150));

async function main(){
  try {
    const [summary, topicsPayload, repsPayload, evidence, model, traj] = await Promise.all([
      fetchJSON(DATA.summary), fetchJSON(DATA.topics), fetchJSON(DATA.reps),
      fetchJSON(DATA.evidence), fetchJSON(DATA.model), fetchJSON(DATA.trajectory)
    ]);

    state.summary = summary;
    state.topics = normalizeTopics(topicsPayload.topics || []);
    state.reps = makeRepsMap(repsPayload);
    state.evidence = evidence;
    state.model = model;
    state.trajectory = traj.trajectory_counts || [];
    state.selectedTopicId = state.topics[0]?.topic_id ?? null;

    renderHeader();
    renderCards();
    renderValidity();
    renderModel();
    renderTrendCharts();
    renderTrajectoryCounts();
    renderEvidence();
    renderEvidenceStats();
    renderTopicsTable();
    renderInspector(state.selectedTopicId);
    renderDownloads();
    bindControls();
  } catch (err) {
    console.error(err);
    showLoadError(err);
  }
}

async function fetchJSON(url){
  const r = await fetch(url, {cache: 'no-store'});
  if (!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
  return await r.json();
}

function showLoadError(err){
  const target = $('summaryCards') || $('main') || document.body;
  const msg = String(err?.message || err || 'unknown error');
  target.innerHTML = `
    <div class="col-12">
      <div class="alert alert-danger shadow-sm">
        <h2 class="h5">Dynamic data did not load.</h2>
        <p class="mb-2">Most likely you opened <code>index.html</code> directly with <code>file://</code>. Browser security blocks loading local JSON files.</p>
        <p class="mb-2"><strong>Fix:</strong> run a local server inside the <code>docs</code> folder:</p>
        <pre class="mb-2"><code>cd D:\\NeurIPS_Trend_Project\\Data_mining\\docs
py -m http.server 8000</code></pre>
        <p class="mb-0">Then open <code>http://localhost:8000</code>. Error detail: <code>${esc(msg)}</code></p>
      </div>
    </div>`;
}

function makeRepsMap(payload){
  const m = new Map();
  for (const row of payload.representatives || []) m.set(Number(row.topic_id), row.papers || []);
  return m;
}

function normalizeTopics(topics){
  return topics.map(t => {
    const years = t.years || {};
    for (const y of YEARS) {
      if (!years[y]) years[y] = {accepted_share_pct: 0, accepted_count: null};
      years[y].accepted_share_pct = num(years[y].accepted_share_pct, 0);
    }
    return {
      ...t,
      topic_id: Number(t.topic_id),
      size_total: num(t.size_total, 0),
      years,
      delta_23_24_pct_points: num(t.delta_23_24_pct_points, 0),
      delta_24_25_pct_points: num(t.delta_24_25_pct_points, 0),
      delta_23_25_pct_points: num(t.delta_23_25_pct_points, 0),
      z_rating: num(t.z_rating, 0),
      keywords: Array.isArray(t.keywords) ? t.keywords : []
    };
  });
}

function num(v, fallback=null){
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}
function fmt(v,d=2){const n=Number(v); return Number.isFinite(n)?n.toFixed(d):'—'}
function fmtInt(v){const n=Number(v); return Number.isFinite(n)?n.toLocaleString('en-US'):'—'}
function fmtSigned(v,d=2){const n=Number(v); if(!Number.isFinite(n)) return '—'; return `${n>=0?'+':''}${n.toFixed(d)}`}
function pval(v){const n=Number(v); if(!Number.isFinite(n)) return '—'; return n<0.001?n.toExponential(2):n.toFixed(4)}
function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function selected(){return state.topics.find(t=>Number(t.topic_id)===Number(state.selectedTopicId));}

function renderHeader(){
  $('projectTitle').textContent = state.summary.project_title || 'NeurIPS Review-Guided Trend Mining';
  $('projectSubtitle').textContent = state.summary.subtitle || 'Accepted-corpus topic trends and review signals.';
  $('githubLinkTop').href = state.summary.repo_url || '#';
  $('hfLinkTop').href = state.summary.hf_dataset_url || '#';
}

function renderCards(){
  const h = state.summary.headline_finding || {};
  const cards = [
    ['Public records', fmtInt(state.summary.public_records_total), 'OpenReview records crawled'],
    ['Accepted papers', fmtInt(state.summary.accepted_papers_total), 'Main analysis corpus'],
    ['Discovered topics', fmtInt(state.summary.topics_total), 'BERTopic after outlier reduction'],
    ['Review–trend r', fmt(h.pearson_r,3), `p = ${pval(h.pearson_p)}`]
  ];
  $('summaryCards').innerHTML = cards.map(([label,value,note]) => `
    <div class="col-md-6 col-xl-3"><div class="card metric-card border-0 shadow-sm h-100"><div class="card-body">
      <div class="label">${esc(label)}</div><div class="value">${esc(value)}</div><div class="note">${esc(note)}</div>
    </div></div></div>`).join('');
}

function renderValidity(){
  $('validityText').innerHTML = `<strong>${esc(state.summary.validity_banner_title || 'Accepted-corpus analysis only')}</strong><br>${esc(state.summary.validity_banner_text || 'Use accepted-paper share, not topic acceptance rate.')}`;
}

function renderModel(){
  const rows = (state.model.models || []).map(m => `<tr><td>${esc(m.model)}</td><td>${m.topics}</td><td>${fmt(m.outlier_rate,3)}</td><td>${fmt(m.diversity,3)}</td><td>${fmt(m.c_npmi,3)}</td><td>${fmt(m.c_v,3)}</td></tr>`).join('');
  $('modelTable').innerHTML = `<div class="table-responsive"><table class="table table-sm table-bordered mb-0"><thead class="table-light"><tr><th>Model</th><th>Topics</th><th>Outlier</th><th>Diversity</th><th>c-NPMI</th><th>c<sub>v</sub></th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderTrendCharts(){
  renderDecompositionChart();
  renderQuadrantChart();
}

function topMovers(n=14){
  return state.topics
    .slice()
    .sort((a,b)=>Math.abs(b.delta_23_25_pct_points)-Math.abs(a.delta_23_25_pct_points))
    .slice(0,n)
    .sort((a,b)=>a.delta_23_25_pct_points-b.delta_23_25_pct_points);
}

function renderDecompositionChart(){
  const rows = topMovers(14);
  const labels = rows.map(r=>r.label);
  Plotly.newPlot('decompositionChart', [
    {type:'bar', orientation:'h', name:'2023→2024', y:labels, x:rows.map(r=>r.delta_23_24_pct_points), marker:{color:'#2563eb'}, hovertemplate:'%{y}<br>2023→2024: %{x:.2f} pp<extra></extra>'},
    {type:'bar', orientation:'h', name:'2024→2025', y:labels, x:rows.map(r=>r.delta_24_25_pct_points), marker:{color:'#f97316'}, hovertemplate:'%{y}<br>2024→2025: %{x:.2f} pp<extra></extra>'}
  ], {
    barmode:'relative',
    margin:{l:220,r:30,t:25,b:55},
    xaxis:{title:'Accepted-paper share change (percentage points)', zeroline:true, zerolinecolor:'#111827', zerolinewidth:1},
    yaxis:{automargin:true},
    legend:{orientation:'h', y:1.08},
    hovermode:'closest'
  }, {responsive:true});
}

function renderQuadrantChart(){
  const pts = state.topics;
  const topIds = new Set(topMovers(10).map(t=>t.topic_id));
  const trace = {
    type:'scatter', mode:'markers+text',
    x:pts.map(p=>p.delta_23_24_pct_points),
    y:pts.map(p=>p.delta_24_25_pct_points),
    text:pts.map(p=>topIds.has(p.topic_id)?p.label:''),
    textposition:'top right',
    customdata:pts.map(p=>[p.topic_id]),
    marker:{size:pts.map(p=>8+Math.sqrt(Math.max(1,p.size_total))*0.5), color:pts.map(p=>p.delta_23_25_pct_points), colorscale:'RdBu', reversescale:true, opacity:0.78, line:{color:'#1f2937',width:1}},
    hovertemplate:'<b>%{customdata[0]}</b> %{text}<br>Δ23→24=%{x:.2f} pp<br>Δ24→25=%{y:.2f} pp<extra></extra>'
  };
  Plotly.newPlot('quadrantChart', [trace], {
    margin:{l:70,r:30,t:20,b:70},
    xaxis:{title:'Δ23→24 accepted-paper share (pp)', zeroline:true, zerolinecolor:'#2563eb', zerolinewidth:2},
    yaxis:{title:'Δ24→25 accepted-paper share (pp)', zeroline:true, zerolinecolor:'#2563eb', zerolinewidth:2},
    annotations:[
      {xref:'paper',yref:'paper',x:0.96,y:0.96,text:'growth both intervals',showarrow:false,font:{size:11,color:'#047857'}},
      {xref:'paper',yref:'paper',x:0.04,y:0.04,text:'decline both intervals',showarrow:false,font:{size:11,color:'#b91c1c'}}
    ],
    hovermode:'closest'
  }, {responsive:true});
  $('quadrantChart').on('plotly_click', e=>{
    const id=e.points?.[0]?.customdata?.[0];
    if(id!==undefined){state.selectedTopicId=Number(id); renderInspector(state.selectedTopicId); $('topics').scrollIntoView({behavior:'smooth'});}
  });
}

function renderTrajectoryCounts(){
  const rows = state.trajectory.slice().sort((a,b)=>b.n_topics-a.n_topics);
  Plotly.newPlot('trajectoryCountsChart', [{
    x: rows.map(r=>r.n_topics), y: rows.map(r=>r.trajectory_type), type:'bar', orientation:'h', marker:{color:'#2563eb'}, hovertemplate:'%{y}: %{x} topics<extra></extra>'
  }], {margin:{l:170,r:20,t:20,b:40},xaxis:{title:'Number of topics'},yaxis:{autorange:'reversed'}}, {displayModeBar:false,responsive:true});
}

function renderEvidence(){
  const mode = state.evidenceMode;
  const ev = state.evidence[mode];
  const pts = ev.points || [];
  const data = [];
  if(mode === 'transition'){
    for(const tr of ['2023→2024','2024→2025']){
      const subset = pts.filter(p=>p.transition===tr);
      data.push(traceFor(subset, tr, tr==='2023→2024'?'circle':'triangle-up'));
    }
  } else {
    data.push(traceFor(pts, 'Topics', 'circle'));
  }
  if(ev.fit && ev.fit.x_grid){
    if (Array.isArray(ev.fit.ci_high) && Array.isArray(ev.fit.ci_low)) {
      data.push({x:ev.fit.x_grid, y:ev.fit.ci_high, type:'scatter', mode:'lines', line:{width:0}, showlegend:false, hoverinfo:'skip'});
      data.push({x:ev.fit.x_grid, y:ev.fit.ci_low, type:'scatter', mode:'lines', fill:'tonexty', fillcolor:'rgba(37,99,235,.12)', line:{width:0}, name:'95% band', hoverinfo:'skip'});
    }
    data.push({x:ev.fit.x_grid, y:ev.fit.y_hat, type:'scatter', mode:'lines', line:{color:'#111827',width:2,dash:'dash'}, name:'Linear fit'});
  }
  const xTitle = mode === 'endpoint' ? 'Accepted-paper share change, 2025−2023 (percentage points)' : 'Adjacent-year accepted-paper share change (percentage points)';
  Plotly.newPlot('evidenceChart', data, {
    margin:{l:70,r:30,t:25,b:70},
    xaxis:{title:xTitle,zeroline:true,zerolinewidth:1,zerolinecolor:'#94a3b8'},
    yaxis:{title:'Year-normalized reviewer rating',zeroline:true,zerolinewidth:1,zerolinecolor:'#94a3b8'},
    legend:{orientation:'h',y:-.2}, hovermode:'closest'
  }, {responsive:true});
  $('evidenceChart').on('plotly_click', e=>{
    const id=e.points?.[0]?.customdata?.[0];
    if(id!==undefined){state.selectedTopicId=Number(id); renderInspector(state.selectedTopicId); $('topics').scrollIntoView({behavior:'smooth'});}
  });
  renderEvidenceStats();
}
function traceFor(pts,name,symbol){return {x:pts.map(p=>p.x), y:pts.map(p=>p.y), text:pts.map(p=>p.label+(p.transition?` (${p.transition})`:'')), customdata:pts.map(p=>[p.topic_id]), type:'scatter', mode:'markers', name, marker:{symbol, size:pts.map(p=>8+Math.sqrt(Math.max(1,p.size))*0.45), opacity:.78, line:{width:1,color:'#1f2937'}}, hovertemplate:'<b>%{text}</b><br>share change=%{x:.2f} pp<br>z rating=%{y:.3f}<extra></extra>'}}
function renderEvidenceStats(){
  const stats = state.evidence[state.evidenceMode].stats || {};
  const items = state.evidenceMode === 'endpoint'
    ? [['Pearson r',fmt(stats.pearson_r,3),`p=${pval(stats.pearson_p)}`],['Spearman ρ',fmt(stats.spearman_rho,3),`p=${pval(stats.spearman_p)}`],['Controlled OLS β',fmt(stats.ols_rating_coef_delta_on_rating,3),`p=${pval(stats.ols_p)}`],['Bootstrap 95% CI',`[${fmt(stats.bootstrap_ci?.[0],2)}, ${fmt(stats.bootstrap_ci?.[1],2)}]`,'rating coefficient']]
    : [['Transition Pearson r',fmt(stats.pearson_r,3),`p=${pval(stats.pearson_p)}`],['Transition Spearman ρ',fmt(stats.spearman_rho,3),`p=${pval(stats.spearman_p)}`],['Transition OLS β',fmt(stats.regression_coef,3),`p=${pval(stats.regression_p)}`],['Weighted transition β',fmt(stats.weighted_regression_coef,3),`p=${pval(stats.weighted_regression_p)}`]];
  $('evidenceStats').innerHTML = items.map(([a,b,c])=>`<div class="col-md-6 col-xl-3"><div class="stat-pill"><div class="stat-label">${esc(a)}</div><div class="stat-value">${esc(b)}</div><div class="small text-secondary">${esc(c)}</div></div></div>`).join('');
}

function bindControls(){
  document.querySelectorAll('[data-evidence-mode]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-evidence-mode]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    state.evidenceMode = btn.dataset.evidenceMode;
    renderEvidence();
  }));
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    state.currentFilter = btn.dataset.filter;
    renderTopicsTable();
  }));
  document.querySelectorAll('[data-bs-toggle="pill"]').forEach(btn => btn.addEventListener('shown.bs.tab', () => {
    setTimeout(() => {
      for (const id of ['decompositionChart','quadrantChart','trajectoryCountsChart']) {
        const el = $(id);
        if (el && el.data) Plotly.Plots.resize(el);
      }
    }, 80);
  }));
}
function filteredTopics(){return state.topics.filter(t=>{if(state.currentFilter==='rising') return t.delta_23_25_pct_points>0; if(state.currentFilter==='declining') return t.delta_23_25_pct_points<0; if(state.currentFilter==='llm') return /llm|language|reasoning|safety|alignment|lora|attention/i.test(t.label); if(state.currentFilter==='highRatedDeclining') return t.delta_23_25_pct_points<0 && t.z_rating>0; return true;});}
function renderTopicsTable(){
  if(state.table){state.table.destroy(); state.table=null;}
  const rows = filteredTopics().map(t=>`<tr><td>${esc(t.label)}</td><td>${fmtInt(t.size_total)}</td><td>${fmt(t.years['2023'].accepted_share_pct,2)}</td><td>${fmt(t.years['2024'].accepted_share_pct,2)}</td><td>${fmt(t.years['2025'].accepted_share_pct,2)}</td><td>${fmtSigned(t.delta_23_25_pct_points,2)}</td><td>${fmt(t.z_rating,3)}</td><td>${esc(t.trajectory_type)}</td><td><button class="btn btn-sm btn-primary" data-topic-id="${t.topic_id}">View</button></td></tr>`).join('');
  document.querySelector('#topicsTable tbody').innerHTML = rows;
  state.table = new DataTable('#topicsTable',{pageLength:8,order:[[5,'desc']]});
  document.querySelector('#topicsTable tbody').onclick = e => {const b=e.target.closest('button[data-topic-id]'); if(!b)return; state.selectedTopicId=Number(b.dataset.topicId); renderInspector(state.selectedTopicId);};
}
function renderInspector(id){
  const t = state.topics.find(x=>Number(x.topic_id)===Number(id));
  if(!t) return;
  $('inspectorTitle').textContent = t.label;
  $('inspectorMeta').textContent = `Size ${fmtInt(t.size_total)} · Δ net ${fmtSigned(t.delta_23_25_pct_points,2)} pp · z rating ${fmt(t.z_rating,3)} · ${t.trajectory_type}`;
  $('keywordChips').innerHTML = (t.keywords||[]).slice(0,6).map(k=>`<span class="keyword-chip">${esc(k)}</span>`).join('');
  $('topicInterpretation').textContent = t.interpretation || '';
  Plotly.newPlot('topicShareChart', [{
    x: YEARS,
    y: YEARS.map(y=>t.years[y].accepted_share_pct),
    type:'scatter',
    mode:'lines+markers',
    line:{color:'#2563eb'},
    hovertemplate:'%{x}: %{y:.2f}%<extra></extra>'
  }], {
    margin:{l:50,r:15,t:20,b:40},
    yaxis:{title:'Share (%)'},
    xaxis:{
      title:'Year',
      type:'category',
      categoryorder:'array',
      categoryarray:['2023','2024','2025'],
      tickmode:'array',
      tickvals:['2023','2024','2025'],
      ticktext:['2023','2024','2025']
    }
  }, {displayModeBar:false,responsive:true});
  Plotly.newPlot('topicDeltaChart', [{x:['23→24','24→25','23→25'], y:[t.delta_23_24_pct_points,t.delta_24_25_pct_points,t.delta_23_25_pct_points], type:'bar', marker:{color:['#60a5fa','#f97316','#111827']}, hovertemplate:'%{x}: %{y:.2f} pp<extra></extra>'}], {margin:{l:50,r:15,t:20,b:40}, yaxis:{title:'Δ pp'}, xaxis:{title:'Interval'}}, {displayModeBar:false,responsive:true});
  const reps = state.reps.get(Number(t.topic_id)) || [];
  $('representativePapers').innerHTML = reps.slice(0,5).map(p=>`<div class="list-group-item px-0"><div class="paper-title">${esc(p.title)}</div><div class="paper-meta">${esc(p.year)} · ${esc(p.decision_tier||'decision unspecified')} · rating ${p.avg_rating?fmt(p.avg_rating,2):'—'}</div><div class="d-flex gap-2 flex-wrap mt-2">${p.openreview_url?`<a class="btn btn-sm btn-outline-secondary" href="${esc(p.openreview_url)}" target="_blank" rel="noopener">OpenReview</a>`:''}${p.semantic_scholar_search_url?`<a class="btn btn-sm btn-outline-secondary" href="${esc(p.semantic_scholar_search_url)}" target="_blank" rel="noopener">Semantic Scholar</a>`:''}</div></div>`).join('') || '<div class="text-secondary small">No representative papers in artifact.</div>';
}
function renderDownloads(){
  const s = state.summary;
  const links = [['GitHub repo',s.repo_url,'Code and project structure'],['Hugging Face data',s.hf_dataset_url,'Large data and artifacts'],['Final report',s.report_pdf_url,'PDF write-up'],['Topic statistics',s.downloads.topic_statistics_csv,'CSV'],['Representative papers',s.downloads.representatives_csv,'CSV'],['Evidence JSON',s.downloads.evidence_json,'JSON']];
  $('downloadCards').innerHTML = links.map(([title,href,desc])=>`<div class="col-md-6 col-xl-4"><div class="download-card"><h3 class="h6">${esc(title)}</h3><p class="small text-secondary mb-2">${esc(desc)}</p><a href="${esc(href)}" class="btn btn-sm btn-outline-primary" target="_blank" rel="noopener">Open</a></div></div>`).join('');
}
function debounce(fn, ms){let t; return (...args)=>{clearTimeout(t); t=setTimeout(()=>fn(...args),ms);};}
