/*
Control de lightbox
*/

function showImage(imageSrc) {
  // Muestra la imagen en el lightbox
  document.getElementById("lightbox-image").src = imageSrc;
  document.getElementById("lightbox").style.display = "flex";
}

// Cierra el lightbox al hacer clic fuera de la imagen
document.getElementById("lightbox").addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "none";
});
