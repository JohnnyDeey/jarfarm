// Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'fixed';
    navLinks.style.top = '72px';
    navLinks.style.left = '0'; navLinks.style.right = '0';
    navLinks.style.background = 'var(--cream)';
    navLinks.style.padding = '24px 5%';
    navLinks.style.borderBottom = '1px solid var(--border)';
    navLinks.style.zIndex = '999';
    navLinks.style.gap = '20px';
  });
}

// Active nav link
const navItems = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navItems.forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Toast notification
function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;bottom:24px;right:24px;z-index:9999;
    background:${type==='success'?'var(--forest)':'#DC2626'};
    color:white;padding:14px 22px;border-radius:12px;
    font-family:'Outfit',sans-serif;font-size:0.9rem;font-weight:500;
    box-shadow:0 8px 32px rgba(0,0,0,0.2);
    animation:slideIn 0.3s ease;max-width:320px;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Add slideIn keyframe
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn { from { transform:translateY(20px);opacity:0; } to { transform:translateY(0);opacity:1; } }
  .fade-up { opacity:0; transform:translateY(28px); transition:opacity 0.6s ease, transform 0.6s ease; }
  .fade-up.visible { opacity:1; transform:translateY(0); }
`;
document.head.appendChild(style);
