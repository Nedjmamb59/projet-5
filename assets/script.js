const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Variables pour les boutons de navigation */
const nextSlide = document.querySelector(".arrow_right"); // Sélectionne le bouton flèche droite
const prevSlide = document.querySelector(".arrow_left");  // Sélectionne le bouton flèche gauche

/* Sélection des éléments de la zone d'affichage des images */
const imgSlider = document.querySelector(".banner-img"); // Sélectionne l'élément de l'image de la bannière
const tagLineSlider = document.querySelector("#banner p"); // Sélectionne l'élément du texte de la bannière

/* Initialisation de la position de l'image */
let index = 0; // indique que l'on commence par la première image (ou diapositive) du tableau
const lastElement = slides.length - 1; // permet de savoir où se trouve la dernière diapositive, utile pour éviter de dépasser les limites du tableau lors de la navigation.

/* Sélection de l'élément contenant les points */
const dots = document.querySelector(".dots"); // Sélectionne le conteneur des points de navigation

/* Structure globale du code encapsulée dans une fonction principale */
function main() {
  createSliderPoints(); // Crée les points de navigation dot
  slideRight(); // Initialise l'événement de clic pour le bouton droit
  slideLeft(); // Initialise l'événement de clic pour le bouton gauche
  dinamicSlidesContent(); // Met à jour le contenu des diapositives dynamiquement
}

/* Lancement du script principal */
main();

/* Création des points de navigation (dot) */
function createSliderPoints() {
  for (let i = 0; i < slides.length; i++) { // A chaque tour de bloucle on veut creer un dot 
    const dot = document.createElement("div"); // Crée un élément div pour chaque point
    dot.classList.add("dot"); // Ajoute la classe 'dot' à chaque point
    if (i == index) {
      dot.classList.add("dot_selected"); // Sélectionne le point correspondant à l'image actuelle
    }
    dots.appendChild(dot); // Ajoute le point au conteneur parent  des points .
  }
}

/* Sélection de tous les points après leur création */
const dot = document.querySelectorAll(".dots .dot"); // Sélectionne tous les points créés

/* Événement de clic pour le bouton de navigation droite */
function slideRight() {
  nextSlide.addEventListener("click", () => { // Ajoute un écouteur d'événements au clic pour le bouton droit
    dot[index].classList.remove("dot_selected"); // Retire la classe 'dot_selected' de l'ancien point
    index++; // Incrémente l'index de l'image
    if (index > lastElement) { // Vérifie si l'index dépasse le dernier élément
      index = 0; // Réinitialise l'index à 0 si c'est le cas
    }
    dot[index].classList.add("dot_selected"); // Ajoute la classe 'dot_selected' au nouveau point
    dinamicSlidesContent(); // Met à jour le contenu des diapositives
  });
}

/* Événement de clic pour le bouton de navigation gauche */
function slideLeft() {
  prevSlide.addEventListener("click", () => { // Ajoute un écouteur d'événements au clic pour le bouton gauche
    dot[index].classList.remove("dot_selected"); // Retire la classe 'dot_selected' de l'ancien point
    index--; // Décrémente l'index de l'image
    if (index < 0) { // Vérifie si l'index est inférieur à 0
      index = lastElement; // Réinitialise l'index au dernier élément si c'est le cas
    }
    dot[index].classList.add("dot_selected"); // Ajoute la classe 'dot_selected' au nouveau point
    dinamicSlidesContent(); // Met à jour le contenu des diapositives
  });
}

/* Mise à jour dynamique de l'image et du texte */
function dinamicSlidesContent() {
  imgSlider.src = "./assets/images/slideshow/" + slides[index].image; // Change la source de l'image
  tagLineSlider.innerHTML = slides[index].tagLine; // Change le texte de la bannière
}

