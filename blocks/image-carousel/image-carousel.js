
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
    var swiper = new Swiper(".image-swiper", {
      pagination: false,
      slidesPerView: 5,
      slidesPerGroup: 5,
      loopFillGroupBlank: true,
      rewind: true,
      loop: true,
      speed: 500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      }
    });
  };

  //pagination
  // Create a new div element
  const newDiv = document.createElement('div');
  newDiv.className = 'swiper-pagination';
  document.querySelector('.image-carousel-wrapper').appendChild(newDiv);
  document.head.appendChild(s);

  //swiper
  document.querySelector(".image-carousel-wrapper").classList.add("swiper");
  document.querySelector(".image-carousel-wrapper").classList.add("image-swiper");

  //add swiper-wrapper
  document.querySelector(".image-carousel").classList.add('swiper-wrapper');
  document.querySelector(".image-carousel").classList.add('image-swiper-wrapper');

  //add slides
  const slides = document.querySelectorAll(".image-carousel > div");
  slides.forEach(slide => {
    slide.classList.add('swiper-slide');
    slide.classList.add('image-swiper-slide');
    slide.querySelector('picture').querySelector("img").classList.add('carousel-logo');
  });

}
