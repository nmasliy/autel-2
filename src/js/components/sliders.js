import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

function initMobileSlider(parent, wrapper, items, breakpoint = 768) {
  if (window.innerWidth <= breakpoint) {
    const $parent = document.querySelector(parent);
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    $parent.classList.add("swiper");
    $wrapper.classList.add("swiper-wrapper");
    $wrapper.classList.remove(wrapper.replace('.',''));
    $items.forEach((slide) => slide.classList.add("swiper-slide"));

    const swiper = new Swiper(parent, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

// initMobileSlider(".comfort__slider", ".comfort__list", ".comfort__item");
