(function($){
    $('.slider-reviews__list').slick({
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: "ease-in",
        prevArrow: ".slider-reviews__button_left",
        nextArrow: ".slider-reviews__button_right"
    });

})($);

// действие при загрузке документа

$(document).ready(function () {
    slickCheck('.advantages__list', {arrows: false,dots: true,infinite: false,speed: 300,slidesToShow: 1,slidesToScroll: 1});
    // slickCheck('.news__list', {arrows: false,dots: true,infinite: false,speed: 300,slidesToShow: 1,slidesToScroll: 1});
});
// действие при ресайзе

$(window).resize(function() {
    slickCheck('.advantages__list', {arrows: false,dots: true,infinite: false,speed: 300,slidesToShow: 1,slidesToScroll: 1});
    // slickCheck('.news__list', {arrows: false,dots: true,infinite: false,speed: 300,slidesToShow: 1,slidesToScroll: 1});
});


function slickIniter (elem, settings) {
    $(elem).slick(settings);
};

function slickCheck (elem, settings) {
    if (window.innerWidth <= 768) {
        if (!$(elem).hasClass('slick-initialized')) {
            slickIniter(elem, settings);
        }
    } else {
        if ($(elem).hasClass('slick-initialized')) {
            $(elem).slick('unslick');
        }
    }
};

function openOverlay () {
    $('.page__overlay').toggleClass('page__overlay_open');
}

function modalClose (elem) {
    $(elem).on('click', function (e) {
        e.preventDefault();
        $(this).closest(".modal").removeClass('modal_open');
        $('.page__overlay').removeClass('page__overlay_open');
    })

}



// function slickCheck () {
//         if ($(window).width() < 768) {
//             if (!$('.advantages__list').hasClass('slick-initialized')) {
//                 slickIniter();
//             }
//         } else {
//             if ($('.advantages__list').hasClass('slick-initialized')) {
//                 $('.advantages__list').slick('unslick');
//             }
//         }
// };



// BUTTON

(function($){
    var buttonMenu = $('.main-header__menu-button');
    var menu = $('.main-nav__content');
	var menuNav = $(".main-nav");

    buttonMenu.on('click', function () {
        buttonMenu.toggleClass('menu-button_active');
        menu.toggleClass('main-nav__content_close');
		menuNav.toggleClass('main-nav_open');
    });



})($);


// MODAL POP-UP


(function($){
    var loginButton = $(".user-login");
    var submitForm = $('.appointment-form__button');



    submitForm.on('click', function (e) {
        openOverlay();
        e.preventDefault();
        $('.modal-success').toggleClass("modal_open");
    });

    modalClose(".modal__close");
    modalClose(".modal__close_mobile");

    loginButton.on('click', function (e) {
        e.preventDefault();
        openOverlay();
        $('.modal-login').toggleClass("modal_open");
    })


})($);



























