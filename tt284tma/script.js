document.addEventListener("DOMContentLoaded", function () {
  showSlide(slideIndex);
  startSlideShow(); // Call the startSlideShow function on page load
});

let slideIndex = 0;
let intervalId = null; // Variable to store the interval ID

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function startSlideShow() {
  // Set up the interval to change slides every 3 seconds
  intervalId = setInterval(function () {
    nextSlide();
  }, 3000); // 3000 milliseconds = 3 seconds
}
