// Import the Bootstrap bundle
//
// Includes Popper and all of Bootstrap's JS plugins.
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Custom JS here
// console.log('hello')

var splide = new Splide('.splide',  {
    direction: 'ttb',
    heightRatio : 0.3,
    width: '95%',
    type: 'loop',
    wheel: "true",
});
splide.mount();


var splide = new Splide('#popular',  {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    arrows: 'false',
    breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
        // 1200: {
        //   perPage: 3,
        // },
        2560: {
          perPage: 3,
        },
      }

});
splide.mount();

var splide = new Splide('#partners',  {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    arrows: 'false',
    breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 3,
        },
        1200: {
          perPage: 5,
        },
        2560: {
          perPage: 5,
        },
      }

});
splide.mount();
