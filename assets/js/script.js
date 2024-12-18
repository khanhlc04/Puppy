//AOS
AOS.init();
//End AOS

//swipper
const swiper = new Swiper(".swipper-blog", {
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 12
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});
//end swipper