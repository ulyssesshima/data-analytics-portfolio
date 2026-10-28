const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('ulysses-theme');
if (savedTheme === 'light') document.body.classList.add('light');
function updateToggle(){ toggle.textContent = document.body.classList.contains('light') ? '☾' : '☼'; toggle.setAttribute('aria-label', document.body.classList.contains('light') ? 'Ativar modo escuro' : 'Ativar modo claro'); }
updateToggle();
toggle.addEventListener('click', () => { document.body.classList.toggle('light'); localStorage.setItem('ulysses-theme', document.body.classList.contains('light') ? 'light' : 'dark'); updateToggle(); });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); entry.target.style.opacity='1'; entry.target.style.transform='none'; observer.unobserve(entry.target); } }), {threshold:.1});
document.querySelectorAll('.case-card, .timeline-item, .stack-panel, .education-panel, .reality-box').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(14px)'; el.style.transition = 'opacity .7s ease, transform .7s ease'; observer.observe(el); });
