// /**
// * Template Name: ChimesBlog
// * Template URL: https://bootstrapmade.com/ChimesBlog-bootstrap-blog-template/
// * Updated: Aug 08 2024 with Bootstrap v5.3.3
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// */

// (function() {
//   "use strict";

//   /**
//    * Apply .scrolled class to the body as the page is scrolled down
//    */
//   function toggleScrolled() {
//     const selectBody = document.querySelector('body');
//     const selectHeader = document.querySelector('#header');
//     if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
//     window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
//   }

//   document.addEventListener('scroll', toggleScrolled);
//   window.addEventListener('load', toggleScrolled);

//   /**
//    * Preloader
//    */
//   const preloader = document.querySelector('#preloader');
//   if (preloader) {
//     window.addEventListener('load', () => {
//       preloader.remove();
//     });
//   }


//   /**
//    * Animation on scroll function and init
//    */
//   function aosInit() {
//     AOS.init({
//       duration: 600,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     });
//   }
//   window.addEventListener('load', aosInit);

//   /**
//    * Init swiper sliders
//    */
//   function initSwiper() {
//     document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
//       let config = JSON.parse(
//         swiperElement.querySelector(".swiper-config").innerHTML.trim()
//       );

//       if (swiperElement.classList.contains("swiper-tab")) {
//         initSwiperWithCustomPagination(swiperElement, config);
//       } else {
//         new Swiper(swiperElement, config);
//       }
//     });
//   }

//   window.addEventListener("load", initSwiper);

// })();