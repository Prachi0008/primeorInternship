// Smooth scroll for nav links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  let currentSection = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

// Show cards with a simple fade-in when they appear on screen
const cards = document.querySelectorAll('.card');

function checkCards() {
  cards.forEach(function(card) {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 60) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

// Set initial styles for cards
cards.forEach(function(card) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
});

window.addEventListener('scroll', checkCards);
checkCards(); // run once on load in case cards are already visible
