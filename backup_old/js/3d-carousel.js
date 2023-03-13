var carousel = $(".carousel"), currdeg  = 0;

function rotate(e){
  currdeg = currdeg - 45
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// storing state in window.carouselPause
const startCarousel = (e) => window.carouselPause = setInterval(rotate, 3000);
const stopCarousel = (e) => clearInterval(window.carouselPause);

// start the carousel when the page is loaded
startCarousel();