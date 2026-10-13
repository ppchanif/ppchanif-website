// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Service tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));
  tab.classList.add('active');
  panels[+tab.dataset.tab].classList.add('active');
}));

// Duplicate reviews for seamless marquee
const track = document.querySelector('.review-track');
if (track) track.innerHTML += track.innerHTML;

// Case study slider
const slider = document.getElementById('caseSlider');
const step = () => (slider.querySelector('.case')?.offsetWidth || 300) + 22;
document.getElementById('nextCase').addEventListener('click', () => slider.scrollBy({ left: step(), behavior: 'smooth' }));
document.getElementById('prevCase').addEventListener('click', () => slider.scrollBy({ left: -step(), behavior: 'smooth' }));

// Reveal on scroll
const revealTargets = document.querySelectorAll('.reveal, .section-head, .card, .problem-list li, .step, .case, .region');
revealTargets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealTargets.forEach(el => io.observe(el));

// Audit form -> WhatsApp
document.getElementById('auditForm').addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const msg = `Hi Hanif, I'd like a free Google Ads audit.

Name: ${d.get('name')}
Email: ${d.get('email')}
Website: ${d.get('website') || '-'}
WhatsApp: ${d.get('whatsapp') || '-'}
Running Google Ads: ${d.get('running')}
Goals: ${d.get('goals') || '-'}`;
  window.open('https://wa.me/8801780641343?text=' + encodeURIComponent(msg), '_blank', 'noopener');
});

document.getElementById('yr').textContent = new Date().getFullYear();
