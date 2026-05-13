// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.card, .glass, .hero-image');

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Typing Effect Modern
const text = 'Creative Designer & Web Developer';
const typingElement = document.querySelector('.tag');
let i = 0;

function typingEffect() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 60);
  }
}

window.onload = () => {
  typingElement.innerHTML = '✨ ';
  typingEffect();
};

// Mobile Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  if (navMenu.classList.contains('active')) {
    menuToggle.innerHTML = '✕';
  } else {
    menuToggle.innerHTML = '☰';
  }
});

// Close Menu After Click
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.innerHTML = '☰';
  });
});

// Navbar Blur On Scroll
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.style.background = 'rgba(15,23,42,0.75)';
    navbar.style.backdropFilter = 'blur(18px)';
  } else {
    navbar.style.background = 'rgba(255,255,255,0.05)';
  }
});

// Smooth Hover Tilt Effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});
