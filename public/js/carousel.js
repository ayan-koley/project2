let myCarousel = document.querySelector("#carouselExampleIndicators");
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Time in milliseconds (e.g., 3000 ms = 3 seconds)
  ride: "carousel",
});
