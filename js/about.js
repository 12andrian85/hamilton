var news = new Splide('#news',  {
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
news.mount();