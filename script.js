const images = [
    { src: "img/Discord-Logo.png", link: "https://discord.gg/pVWbsEJPub"},
    { src: "img/Instagram_icon.webp", link: "https://www.instagram.com/naitex1/"}
];

let currentIndex = 0;

function changeImageAndLink() {
  const currentImage = images[currentIndex];
  const imgElement = document.getElementById('image');
  const linkElement = document.getElementById('imageLink');

  // Masque l'image en cours en appliquant l'animation
  imgElement.classList.remove('visible');

  // Attendre 1 seconde (le temps de l'animation)
  setTimeout(() => {
    // Change l'image et le lien
    imgElement.src = currentImage.src;
    linkElement.href = currentImage.link;

    // Applique l'animation de défilement
    setTimeout(() => {
      imgElement.classList.add('visible');
    }, 50); // Un petit délai pour appliquer la transition correctement
  }, 1000); // Attendre 1 seconde avant de changer l'image (correspond au temps de la transition)
  
  // Passe à l'image suivante
  currentIndex = (currentIndex + 1) % images.length;
}

// Changer d'image et de lien toutes les 15 secondes
setInterval(changeImageAndLink, 15000);