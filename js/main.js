
const splideNews = document.querySelector('#news')
const splideBanner = document.querySelector('#banner')
const splidePopular = document.querySelector('#popular')
const splidePartners = document.querySelector('#partners')
const splideGallery = document.querySelector('#gallery')
const splideSugestion = document.querySelector('#sugestion')

if (splideBanner) {

  new Splide('#banner', {
    direction: 'ttb',
    heightRatio: 0.3,
    width: '95%',
    type: 'loop',
    wheel: "true",
  }).mount();

}


if (splidePopular) {

  new Splide('#popular', {
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
  }).mount();
}

if (splidePartners) {

  new Splide('#partners', {
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
  }).mount();
}


if (splideNews) {

  new Splide('#news', {
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
  }).mount();
}

if (splideGallery) {

  new Splide('#gallery', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    arrows: 'false',
    breakpoints: {
      // 640: {
      //   perPage: 1,
      // },
      // 768: {
      //   perPage: 3,
      // },
      // 1200: {
      //   perPage: 5,
      // },
      2560: {
        perPage: 1,
      },
    }
  }).mount();
}

if (splideSugestion) {

  new Splide('#sugestion', {
    type: 'loop',
    perPage: 3,
    // focus: 'center',
    arrows: 'true',
    breakpoints: {
      640: {
        perPage: 1,
      },
      // 768: {
      //   perPage: 3,
      // },
      // 1200: {
      //   perPage: 5,
      // },
      2560: {
        perPage: 2,
      },
    }
  }).mount();
}





