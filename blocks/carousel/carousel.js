
export default function decorate(block) {

  //Swiper css
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
  document.head.appendChild(linkElement);

  //Swiper
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
  s.onload = function () {
    // After the script is loaded, initialize Swiper
    var swiper = new Swiper(".swiper", {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  };

  //pagination
  // Create a new div element
  const newDiv = document.createElement('div');
  newDiv.className = 'swiper-pagination';
  document.querySelector('.carousel-wrapper').appendChild(newDiv);

  document.head.appendChild(s);

  //swiper
  document.querySelector(".carousel-wrapper").classList.add("swiper");

  //add swiper-wrapper
  document.querySelector(".carousel").classList.add('swiper-wrapper');

  //add slides
  const slides = document.querySelectorAll(".carousel > div");
  slides.forEach(slide => {
    slide.classList.add('swiper-slide');
  });

}
