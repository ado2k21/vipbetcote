// Menu mobile
function toggleMenu() {
  const menu = document.querySelector('nav');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Slider manuel
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});