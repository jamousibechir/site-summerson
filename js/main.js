// ─── Nav scroll ───────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── Mobile menu ──────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ─── Mob collapse toggle ──────────────────────────────────────
function mobToggle(btn) {
  const collapse = btn.previousElementSibling;
  const isOpen = collapse.classList.toggle('open');
  btn.textContent = isOpen ? '↑ Réduire' : (btn.dataset.closed || '+ Voir plus');
}

// ─── Expertise accordion (mobile only) ───────────────────────
function initExpAccordion() {
  if (window.innerWidth > 768) return;
  document.querySelectorAll('.exp-card:not(:last-child)').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => card.classList.toggle('exp-open'));
  });
}
document.addEventListener('DOMContentLoaded', initExpAccordion);

// Close mobile menu on anchor link click
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// ─── Fade-in on scroll ────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─── Lang switcher ────────────────────────────────────────────
function setLang(lang, btn) {
  document.querySelectorAll('.nav-lang button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ─── Contact form submit ──────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✓ Demande envoyée — Réponse sous 24h';
  btn.style.background = '#2a6e4a';
  btn.disabled = true;
}
