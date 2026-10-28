const DATA = {};
const SOURCES = { executive: 'data/executive.json', supply: 'data/supply.json', quality: 'data/quality.json' };
let current = 'executive';
const $ = id => document.getElementById(id);

function makeChart(d) {
  const w = 720, h = 270, p = { l: 36, r: 18, t: 14, b: 30 };
  const max = 100;
  const step = (w - p.l - p.r) / (d.labels.length - 1);
  const points = series => series.map((v, i) => `${p.l + i * step},${h - p.b - (v / max) * (h - p.t - p.b)}`).join(' ');
  const area = `${p.l},${h - p.b} ${points(d.seriesA)} ${p.l + (d.labels.length - 1) * step},${h - p.b}`;
  const dots = d.seriesA.map((v, i) => `<circle class="data-dot" cx="${p.l + i * step}" cy="${h - p.b - (v / max) * (h - p.t - p.b)}" r="4"/>`).join('');
  const axes = [0, 25, 50, 75, 100].map(v => { const y = h - p.b - (v / max) * (h - p.t - p.b); return `<line class="grid-line" x1="${p.l}" x2="${w - p.r}" y1="${y}" y2="${y}"/><text class="axis-label" x="0" y="${y + 3}">${v}</text>`; }).join('');
  const labels = d.labels.map((x, i) => `<text class="axis-label" text-anchor="middle" x="${p.l + i * step}" y="${h - 7}">${x}</text>`).join('');
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Gráfico de ${d.chartTitle}"><defs><linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#74f4cf" stop-opacity=".55"/><stop offset="1" stop-color="#74f4cf" stop-opacity="0"/></linearGradient></defs>${axes}<polygon class="area-fill" points="${area}"/><polyline class="line-b" points="${points(d.seriesB)}"/><polyline class="line-a" points="${points(d.seriesA)}"/>${dots}${labels}</svg>`;
}

function render() {
  const d = DATA[current];
  if (!d) return;
  const context = $('contextSelect').value || d.contexts[0];
  $('dashKicker').textContent = d.kicker;
  $('dashTitle').textContent = d.title;
  $('dashDescription').textContent = d.description;
  $('chartTitle').textContent = d.chartTitle;
  $('datasetBadge').textContent = d.meta.status;
  $('datasetNote').textContent = `${d.meta.source} · Granularidade: ${d.meta.grain} · ${d.meta.anonymization} ${d.meta.limitations}`;
  $('contextSelect').innerHTML = d.contexts.map(x => `<option>${x}</option>`).join('');
  $('contextSelect').value = context;
  $('kpiGrid').innerHTML = d.kpis.map(x => `<div class="kpi-card"><small>${x[0]}</small><strong>${x[1]}</strong><em class="${x[3] === 'down' ? 'down' : ''}">${x[2]}</em></div>`).join('');
  $('mainChart').innerHTML = makeChart(d);
  $('chartLegend').innerHTML = d.legend.map((x, i) => `<span><i class="${i ? 'gold' : ''}"></i>${x}</span>`).join('');
  $('signalScore').textContent = d.insight[2];
  $('signalValue').textContent = d.insight[3];
  $('insightTitle').textContent = d.insight[0];
  $('insightText').textContent = d.insight[1];
  $('signalFootLeft').textContent = `${context} / ${d.insight[4]}`;
  $('signalFootRight').textContent = d.insight[5];
  $('tableTitle').textContent = `${d.tableTitle} · ${context}`;
  $('tableHead').innerHTML = `<tr>${d.heads.map(x => `<th>${x}</th>`).join('')}</tr>`;
  $('tableBody').innerHTML = d.rows.map(row => `<tr>${row.map((x, i) => `<td class="${i === row.length - 1 ? x : ''}">${x}</td>`).join('')}</tr>`).join('');
  $('signalRing').style.background = `radial-gradient(circle,rgba(116,244,207,.1) 0 52%,transparent 53%),conic-gradient(var(--electric) 0 ${d.insight[3]}%,rgba(116,244,207,.12) ${d.insight[3]}% 100%)`;
}

async function loadData() {
  $('datasetNote').textContent = 'Carregando contratos de dados sintéticos…';
  try {
    await Promise.all(Object.entries(SOURCES).map(async ([key, path]) => {
      const response = await fetch(path, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Falha ao carregar ${path}`);
      DATA[key] = await response.json();
    }));
    $('dashboardSelect').value = current;
    $('contextSelect').innerHTML = DATA[current].contexts.map(x => `<option>${x}</option>`).join('');
    render();
  } catch (error) {
    $('datasetBadge').textContent = 'ERRO DE FONTE';
    $('datasetNote').textContent = 'Não foi possível carregar os JSONs. Execute o projeto por um servidor local com npm start.';
    $('dashDescription').textContent = error.message;
  }
}

$('dashboardSelect').addEventListener('change', event => {
  current = event.target.value;
  $('contextSelect').innerHTML = DATA[current].contexts.map(x => `<option>${x}</option>`).join('');
  render();
});
$('contextSelect').addEventListener('change', render);
$('periodSelect').addEventListener('change', event => {
  document.body.dataset.period = event.target.value;
  document.querySelector('.status-pill').innerHTML = `<i></i> SIMULATION / ${event.target.value.toUpperCase()}`;
});
document.querySelectorAll('[data-module]').forEach(input => input.addEventListener('change', event => {
  const name = event.target.dataset.module;
  document.querySelectorAll(`.module[data-module="${name}"]`).forEach(el => { el.style.display = event.target.checked ? '' : 'none'; });
  $('emptyState').hidden = [...document.querySelectorAll('.module')].some(x => getComputedStyle(x).display !== 'none');
}));
$('compactToggle').addEventListener('click', () => document.body.classList.toggle('compact'));
$('resetView').addEventListener('click', () => {
  document.body.classList.remove('compact');
  document.querySelectorAll('[data-module]').forEach(x => { x.checked = true; });
  document.querySelectorAll('.module').forEach(x => { x.style.display = ''; });
  $('emptyState').hidden = true;
  $('dashboardSelect').value = 'executive';
  $('periodSelect').value = 'q4';
  current = 'executive';
  $('contextSelect').innerHTML = DATA[current].contexts.map(x => `<option>${x}</option>`).join('');
  render();
});
$('dashTheme').addEventListener('click', () => document.body.classList.toggle('light'));
loadData();
