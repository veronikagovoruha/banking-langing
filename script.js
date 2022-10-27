$(function (){
    $('.slider__list').slick({
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
    });

    $('.image__list').slick({
        vertical: true,
        arrows: false,
        dots: true,
        speed: 1000,
        // fade: true,
        // autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
})

$(document).ready(function (){
    $('.header__burger').click(function (event){
        $('.header__burger, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
})