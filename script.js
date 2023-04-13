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

//
//
//
//

let slider_2 = tns({
  container: ".my-slider-2",
  slideBy: 1,
  speed: 400,
  nav: false,
  dots: true,
  mouseDrag: true,
  touchDrag: true,
  loop: false,
  controlsContainer: ".controls-2",
  prevButton: ".previous-2",
  nextButton: ".next-2",
  responsive: {
    1600: {
      items: 3,
      gutter: 20,
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

//
//
//
//
//
//
//
//
//
//
//
//

const jsonInfo = (data) => {
  // services json info
  document.querySelector("#WebsiteTitle").innerText =
    data.services.website.website_title;
  document.querySelector("#WebsiteDescription").innerText =
    data.services.website.website_description;

  document.querySelector("#WordpressTitle").innerText =
    data.services.wordpress.wordpress_title;
  document.querySelector("#WordpressDescription").innerText =
    data.services.wordpress.wordpress_description;

  document.querySelector("#HostTitle").innerText =
    data.services.host.host_title;
  document.querySelector("#HostDescription").innerText =
    data.services.host.host_description;

  document.querySelector("#SEOTitle").innerText = data.services.seo.seo_title;
  document.querySelector("#SEODescription").innerText =
    data.services.seo.seo_description;

  // modal services json info
  document.querySelector("#WebsiteTitleModal").innerText =
    data.modal_services.website_modal.website_title_modal;
  document.querySelector("#WebsiteDescriptionModal").innerText =
    data.modal_services.website_modal.website_description_modal;

  document.querySelector("#WordpressTitleModal").innerText =
    data.modal_services.wordpress_modal.wordpress_title_modal;
  document.querySelector("#WordpressDescriptionModal").innerText =
    data.modal_services.wordpress_modal.wordpress_description_modal;

  document.querySelector("#HostTitleModal").innerText =
    data.modal_services.hosting_modal.host_title_modal;
  document.querySelector("#HostDescriptionModal").innerText =
    data.modal_services.hosting_modal.host_description_modal;

  document.querySelector("#SEOTitleModal").innerText =
    data.modal_services.seo_modal.seo_title_modal;
  document.querySelector("#SEODescriptionModal").innerText =
    data.modal_services.seo_modal.seo_description_modal;

  // about me json info
  document.querySelector("#aboutMe").innerText = data.about.about_me;
};

fetch("info.json")
  .then((response) => response.json())
  .then(jsonInfo);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const navEl = document.querySelector('.new-navbar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 56) {
//         navEl.classList.add('navbar-scrolled');
//     } else if (window.scrollY < 56) {
//         navEl.classList.remove('navbar-scrolled');
//     }
// })
