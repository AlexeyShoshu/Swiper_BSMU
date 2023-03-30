new Swiper('.bsmu-slider', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },

    autoplay: {
        delay: 3000,
    },

    loop: true,

    slidesPerView: 6,

    slidesPerScroll: 1,

    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});

