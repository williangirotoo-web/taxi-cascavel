const nav = document.getElementById('nav');
window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
  });
}

document.querySelectorAll('.faq-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i) {
      i.classList.remove('open');
    });
    if (!isOpen) item.classList.add('open');
  });
});

document.querySelectorAll('a').forEach(function(a) {
  const href = a.getAttribute('href');
  if (href && href.startsWith('#')) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (mobileMenu) mobileMenu.classList.remove('open');
    });
  }
});
