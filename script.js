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

// Liste des messages publicitaires
const messages = [
  "Nouvel achat +509******35",
  "Nouvel achat plan 30jou +509******19",
  "Nouvel achat plan 15jou +509******00",
  "Nouvel achat plan a Vie +509******76",
  "Nouvel achat plan a Vie +509******89",
  "Nouvel achat +509******40",
  "Nouvel achat plan a Vie +509******05",
  "Nouvel achat plan 15jou +509******39",
  "Nouvel achat plan 5jou +509******09",
  "Nouvel achat plan a Vie +509******15",
  "Nouvel achat +509******90",
  "Nouvel achat +509******62",
  "Nouvel achat plan 30jou +509******35"
];

// Fonction pour afficher un message aléatoire
function afficherPub() {
  const pubText = document.getElementById("pub-text");
  const randomIndex = Math.floor(Math.random() * messages.length);
  pubText.textContent = messages[randomIndex];

  // Afficher le texte
  pubText.classList.add("show");

  // Disparaître après 3 secondes
  setTimeout(() => {
    pubText.classList.remove("show");
  }, 3000);
}

// Afficher le premier message après 15 secondes
setTimeout(afficherPub, 15000);

// Afficher les messages suivants toutes les 25 secondes
setInterval(afficherPub, 25000);