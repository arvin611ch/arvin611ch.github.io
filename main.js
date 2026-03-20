// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 4px 20px rgba(0,0,0,0.35)'
    : 'none';
});

// Active nav link highlight
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// Mobile hamburger
const hamburger = document.querySelector('.nav-hamburger');
const navList   = document.querySelector('.nav-links');
if (hamburger && navList) {
  hamburger.addEventListener('click', () => {
    const open = navList.style.display === 'flex';
    navList.style.display = open ? 'none' : 'flex';
    navList.style.flexDirection = 'column';
    navList.style.position = 'absolute';
    navList.style.top = '60px';
    navList.style.right = '1rem';
    navList.style.background = 'var(--blue)';
    navList.style.padding = '0.5rem';
    navList.style.borderRadius = '6px';
    navList.style.border = '1px solid rgba(253,181,21,0.3)';
  });

  // close on link click
  navList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navList.style.display = 'none';
    });
  });
}

// Fade-in on scroll
const fadeEls = document.querySelectorAll(
  '.exp-featured, .exp-card, .award-card, .skill-group, .stat-card, .timeline-item, .project-item'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
