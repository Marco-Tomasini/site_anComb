// Modified JavaScript
let slideIndexes = [1, 1, 1]; // Array to track indexes for 3 carousels

// Initialize all carousels
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, carouselIndex) {
  showSlides(slideIndexes[carouselIndex] += n, carouselIndex);
}

function showSlides(n, carouselIndex) {
  const containers = document.querySelectorAll('.slideshow-container');
  const slides = containers[carouselIndex].querySelectorAll('.mySlides');
  
  if (n > slides.length) slideIndexes[carouselIndex] = 1;
  if (n < 1) slideIndexes[carouselIndex] = slides.length;
  
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndexes[carouselIndex]-1].style.display = "block";
}