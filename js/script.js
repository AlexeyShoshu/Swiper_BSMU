new Swiper('.bsmu-slider', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },

    autoplay: {
        delay: 500000,
    },

    loop: true,

    slidesPerView: 6,

    slideToClickedSlide: true,

    slidesPerScroll: 1,

    allowTouchMove: false,

    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});

