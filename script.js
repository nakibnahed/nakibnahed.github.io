let slider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 400,
  nav: false,
  dots: true,
  mouseDrag: true,
  touchDrag: true,
  loop: true,
  controlsContainer: ".controls",
  prevButton: ".previous",
  nextButton: ".next",
  responsive: {
    1600: {
      items: 3,
      gutter: 30,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

let slider_2 = tns({
  container: ".my-slider-2",
  slideBy: 1,
  speed: 400,
  nav: false,
  dots: true,
  mouseDrag: true,
  touchDrag: true,
  loop: true,
  controlsContainer: ".controls-2",
  prevButton: ".previous-2",
  nextButton: ".next-2",
  responsive: {
    1600: {
      items: 3,
      gutter: 30,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

// const navEl = document.querySelector('.new-navbar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 56) {
//         navEl.classList.add('navbar-scrolled');
//     } else if (window.scrollY < 56) {
//         navEl.classList.remove('navbar-scrolled');
//     }
// })
