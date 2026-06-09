const DATA = {
  summary: './data/summary.json', topics: './data/topics.json', reps: './data/representatives.json',
  evidence: './data/evidence.json', model: './data/model_diagnostics.json', trajectory: './data/trajectory_counts.json'
};
const state = {summary:null, topics:[], reps:new Map(), evidence:null, model:null, table:null, selectedTopicId:null, currentFilter:'all', evidenceMode:'endpoint'};
const YEARS = ['2023','2024','2025'];

document.addEventListener('DOMContentLoaded', main);
async function main(){
  const [summary, topicsPayload, repsPayload, evidence, model, traj] = await Promise.all(Object.values(DATA).map(fetchJSON));
  state.summary=summary; state.topics=topicsPayload.topics; state.reps=makeRepsMap(repsPayload); state.evidence=evidence; state.model=model; state.trajectory=traj.trajectory_counts||[]; state.selectedTopicId=state.topics[0]?.topic_id;
  renderHeader(); renderCards(); renderValidity(); renderModel(); renderTrajectoryCounts(); renderEvidence(); renderEvidenceStats(); renderTopicsTable(); renderInspector(state.selectedTopicId); renderDownloads(); bindControls();
}
async function fetchJSON(url){const r=await fetch(url); if(!r.ok) throw new Error(`${url}: ${r.status}`); return await r.json();}
function makeRepsMap(payload){const m=new Map(); for(const row of payload.representatives||[]) m.set(Number(row.topic_id), row.papers||[]); return m;}
function fmt(v,d=2){const n=Number(v); return Number.isFinite(n)?n.toFixed(d):'—'}
function fmtInt(v){const n=Number(v); return Number.isFinite(n)?n.toLocaleString('en-US'):'—'}
function fmtSigned(v,d=2){const n=Number(v); if(!Number.isFinite(n)) return '—'; return `${n>=0?'+':''}${n.toFixed(d)}`}
function pval(v){const n=Number(v); if(!Number.isFinite(n)) return '—'; return n<0.001?n.toExponential(2):n.toFixed(4)}
function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function selected(){return state.topics.find(t=>Number(t.topic_id)===Number(state.selectedTopicId));}
function renderHeader(){projectTitle.textContent=state.summary.project_title; projectSubtitle.textContent=state.summary.subtitle; githubLinkTop.href=state.summary.repo_url; hfLinkTop.href=state.summary.hf_dataset_url;}
function renderCards(){
 const h=state.summary.headline_finding||{};
 const cards=[['Public records',fmtInt(state.summary.public_records_total),'OpenReview records crawled'],['Accepted papers',fmtInt(state.summary.accepted_papers_total),'Main analysis corpus'],['Discovered topics',fmtInt(state.summary.topics_total),'BERTopic after outlier reduction'],['Review–trend r',fmt(h.pearson_r,3),`p = ${pval(h.pearson_p)}`]];
 summaryCards.innerHTML=cards.map(([label,value,note])=>`<div class="col-md-6 col-xl-3"><div class="card metric-card border-0 shadow-sm h-100"><div class="card-body"><div class="label">${esc(label)}</div><div class="value">${esc(value)}</div><div class="note">${esc(note)}</div></div></div></div>`).join('');
}
function renderValidity(){validityText.innerHTML=`<strong>${esc(state.summary.validity_banner_title)}</strong><br>${esc(state.summary.validity_banner_text)}`;}
function renderModel(){
 const rows=(state.model.models||[]).map(m=>`<tr><td>${esc(m.model)}</td><td>${m.topics}</td><td>${fmt(m.outlier_rate,3)}</td><td>${fmt(m.diversity,3)}</td><td>${fmt(m.c_npmi,3)}</td><td>${fmt(m.c_v,3)}</td></tr>`).join('');
 modelTable.innerHTML=`<div class="table-responsive"><table class="table table-sm table-bordered mb-0"><thead class="table-light"><tr><th>Model</th><th>Topics</th><th>Outlier</th><th>Diversity</th><th>c-NPMI</th><th>c<sub>v</sub></th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function renderTrajectoryCounts(){
 const rows=state.trajectory.slice().sort((a,b)=>b.n_topics-a.n_topics);
 Plotly.newPlot('trajectoryCountsChart',[{x:rows.map(r=>r.n_topics),y:rows.map(r=>r.trajectory_type),type:'bar',orientation:'h',marker:{color:'#2563eb'},hovertemplate:'%{y}: %{x} topics<extra></extra>'}],{margin:{l:160,r:20,t:20,b:40},xaxis:{title:'Number of topics'},yaxis:{autorange:'reversed'}},{displayModeBar:false,responsive:true});
}
function renderEvidence(){
 const mode=state.evidenceMode; const ev=state.evidence[mode]; const pts=ev.points||[];
 const data=[];
 if(mode==='transition'){
  for(const tr of ['2023→2024','2024→2025']){ const subset=pts.filter(p=>p.transition===tr); data.push(traceFor(subset,tr, tr==='2023→2024'?'circle':'triangle-up')); }
 } else data.push(traceFor(pts,'Topics','circle'));
 if(ev.fit && ev.fit.x_grid){ data.push({x:ev.fit.x_grid,y:ev.fit.ci_high,type:'scatter',mode:'lines',line:{width:0},showlegend:false,hoverinfo:'skip'}); data.push({x:ev.fit.x_grid,y:ev.fit.ci_low,type:'scatter',mode:'lines',fill:'tonexty',fillcolor:'rgba(37,99,235,.12)',line:{width:0},name:'95% band',hoverinfo:'skip'}); data.push({x:ev.fit.x_grid,y:ev.fit.y_hat,type:'scatter',mode:'lines',line:{color:'#111827',width:2,dash:'dash'},name:'Linear fit'}); }
 const xTitle=mode==='endpoint'?'Accepted-paper share change, 2025−2023 (percentage points)':'Adjacent-year accepted-paper share change (percentage points)';
 Plotly.newPlot('evidenceChart',data,{margin:{l:62,r:25,t:25,b:65},xaxis:{title:xTitle,zeroline:true,zerolinewidth:1,zerolinecolor:'#94a3b8'},yaxis:{title:'Year-normalized reviewer rating',zeroline:true,zerolinewidth:1,zerolinecolor:'#94a3b8'},legend:{orientation:'h',y:-.2},hovermode:'closest'}, {responsive:true});
 evidenceChart.on('plotly_click', e=>{const id=e.points?.[0]?.customdata?.[0]; if(id!==undefined){state.selectedTopicId=Number(id); renderInspector(state.selectedTopicId); document.getElementById('topics').scrollIntoView({behavior:'smooth'});}});
 renderEvidenceStats();
}
function traceFor(pts,name,symbol){return {x:pts.map(p=>p.x), y:pts.map(p=>p.y), text:pts.map(p=>p.label+(p.transition?` (${p.transition})`:'')), customdata:pts.map(p=>[p.topic_id]), type:'scatter', mode:'markers', name, marker:{symbol, size:pts.map(p=>8+Math.sqrt(Math.max(1,p.size))*0.45), opacity:.78, line:{width:1,color:'#1f2937'}}, hovertemplate:'<b>%{text}</b><br>x=%{x:.2f}<br>z rating=%{y:.3f}<extra></extra>'}}
function renderEvidenceStats(){
 const stats=state.evidence[state.evidenceMode].stats||{};
 const items=state.evidenceMode==='endpoint' ? [['Pearson r',fmt(stats.pearson_r,3),`p=${pval(stats.pearson_p)}`],['Spearman ρ',fmt(stats.spearman_rho,3),`p=${pval(stats.spearman_p)}`],['Controlled OLS β',fmt(stats.ols_rating_coef_delta_on_rating,3),`p=${pval(stats.ols_p)}`],['Bootstrap 95% CI',`[${fmt(stats.bootstrap_ci?.[0],2)}, ${fmt(stats.bootstrap_ci?.[1],2)}]`,'rating coefficient']] : [['Transition Pearson r',fmt(stats.pearson_r,3),`p=${pval(stats.pearson_p)}`],['Transition Spearman ρ',fmt(stats.spearman_rho,3),`p=${pval(stats.spearman_p)}`],['Transition OLS β',fmt(stats.regression_coef,3),`p=${pval(stats.regression_p)}`],['Weighted transition β',fmt(stats.weighted_regression_coef,3),`p=${pval(stats.weighted_regression_p)}`]];
 evidenceStats.innerHTML=items.map(([a,b,c])=>`<div class="col-md-6 col-xl-3"><div class="stat-pill"><div class="stat-label">${esc(a)}</div><div class="stat-value">${esc(b)}</div><div class="small text-secondary">${esc(c)}</div></div></div>`).join('');
}
function bindControls(){
 document.querySelectorAll('[data-evidence-mode]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-evidence-mode]').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); state.evidenceMode=btn.dataset.evidenceMode; renderEvidence();}));
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{state.currentFilter=btn.dataset.filter; renderTopicsTable();}));
}
function filteredTopics(){return state.topics.filter(t=>{if(state.currentFilter==='rising') return t.delta_23_25_pct_points>0; if(state.currentFilter==='declining') return t.delta_23_25_pct_points<0; if(state.currentFilter==='llm') return /llm|language|reasoning|safety|alignment|lora|attention/i.test(t.label); if(state.currentFilter==='highRatedDeclining') return t.delta_23_25_pct_points<0 && t.z_rating>0; return true;});}
function renderTopicsTable(){
 if(state.table){state.table.destroy(); state.table=null;}
 const rows=filteredTopics().map(t=>`<tr><td>${esc(t.label)}</td><td>${fmtInt(t.size_total)}</td><td>${fmt(t.years['2023'].accepted_share_pct,2)}</td><td>${fmt(t.years['2024'].accepted_share_pct,2)}</td><td>${fmt(t.years['2025'].accepted_share_pct,2)}</td><td>${fmtSigned(t.delta_23_25_pct_points,2)}</td><td>${fmt(t.z_rating,3)}</td><td>${esc(t.trajectory_type)}</td><td><button class="btn btn-sm btn-primary" data-topic-id="${t.topic_id}">View</button></td></tr>`).join('');
 document.querySelector('#topicsTable tbody').innerHTML=rows;
 state.table=new DataTable('#topicsTable',{pageLength:8,order:[[5,'desc']],layout:{topStart:'search',topEnd:'pageLength',bottomStart:'info',bottomEnd:'paging'}});
 document.querySelector('#topicsTable tbody').onclick=e=>{const b=e.target.closest('button[data-topic-id]'); if(!b)return; state.selectedTopicId=Number(b.dataset.topicId); renderInspector(state.selectedTopicId);};
}
function renderInspector(id){
 const t=state.topics.find(x=>Number(x.topic_id)===Number(id)); if(!t)return;
 inspectorTitle.textContent=t.label; inspectorMeta.textContent=`Size ${fmtInt(t.size_total)} · Δ net ${fmtSigned(t.delta_23_25_pct_points,2)} pp · z rating ${fmt(t.z_rating,3)} · ${t.trajectory_type}`;
 keywordChips.innerHTML=(t.keywords||[]).slice(0,6).map(k=>`<span class="keyword-chip">${esc(k)}</span>`).join(''); topicInterpretation.textContent=t.interpretation||'';
 Plotly.newPlot('topicShareChart',[{x:YEARS,y:YEARS.map(y=>t.years[y].accepted_share_pct),type:'scatter',mode:'lines+markers',line:{color:'#2563eb'},hovertemplate:'%{x}: %{y:.2f}%<extra></extra>'}],{margin:{l:50,r:15,t:20,b:40},yaxis:{title:'Share (%)'},xaxis:{title:'Year'}},{displayModeBar:false,responsive:true});
 Plotly.newPlot('topicDeltaChart',[{x:['23→24','24→25','23→25'],y:[t.delta_23_24_pct_points,t.delta_24_25_pct_points,t.delta_23_25_pct_points],type:'bar',marker:{color:['#60a5fa','#f97316','#111827']},hovertemplate:'%{x}: %{y:.2f} pp<extra></extra>'}],{margin:{l:50,r:15,t:20,b:40},yaxis:{title:'Δ pp'},xaxis:{title:'Interval'}},{displayModeBar:false,responsive:true});
 const reps=state.reps.get(Number(t.topic_id))||[]; representativePapers.innerHTML=reps.slice(0,5).map(p=>`<div class="list-group-item px-0"><div class="paper-title">${esc(p.title)}</div><div class="paper-meta">${esc(p.year)} · ${esc(p.decision_tier||'decision unspecified')} · rating ${p.avg_rating?fmt(p.avg_rating,2):'—'}</div><div class="d-flex gap-2 flex-wrap mt-2">${p.openreview_url?`<a class="btn btn-sm btn-outline-secondary" href="${esc(p.openreview_url)}" target="_blank" rel="noopener">OpenReview</a>`:''}${p.semantic_scholar_search_url?`<a class="btn btn-sm btn-outline-secondary" href="${esc(p.semantic_scholar_search_url)}" target="_blank" rel="noopener">Semantic Scholar</a>`:''}</div></div>`).join('') || '<div class="text-secondary small">No representative papers in artifact.</div>';
}
function renderDownloads(){
 const s=state.summary;
 const links=[['GitHub repo',s.repo_url,'Code and project structure'],['Hugging Face data',s.hf_dataset_url,'Large data and artifacts'],['Final report',s.report_pdf_url,'PDF write-up'],['Topic statistics',s.downloads.topic_statistics_csv,'CSV'],['Representative papers',s.downloads.representatives_csv,'CSV'],['Evidence JSON',s.downloads.evidence_json,'JSON']];
 downloadCards.innerHTML=links.map(([title,href,desc])=>`<div class="col-md-6 col-xl-4"><div class="download-card"><h3 class="h6">${esc(title)}</h3><p class="small text-secondary mb-2">${esc(desc)}</p><a href="${esc(href)}" class="btn btn-sm btn-outline-primary" target="_blank" rel="noopener">Open</a></div></div>`).join('');
}
