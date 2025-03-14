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
  "Nouvel achat plan 30jou",
  "Nouvel achat plan 5jou",
  "Nouvel achat plan 5jou",
  "9 Nouvel achat plan 15jou",
  "Nouvel achat plan a Vie",
  "Nouvel achat plan a Vie",
  "Nouvel achat plan 5jou",
  "239 Nouvel achat jodia",
  "Nouvel achat plan a Vie",
  "Cote 248 valider hier",
  "Nouvel achat plan 15jou",
  "Nouvel achat plan 5jou",
  "Nouvel achat plan a Vie",
  "Nouvel achat plan 5jou",
  "Yon abòne fè 33000gdes avanhier"
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

// Afficher la première pub après 15 secondes
setTimeout(afficherPub, 15000);

// Afficher une pub toutes les 25 secondes après la première
setInterval(afficherPub, 25000);