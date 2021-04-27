window.onload = function() {
    $(".preload").delay(400).fadeOut("200", function () {
        $('#preload').addClass('move');
        $('#preload').fadeOut(200);
    });
};

$(document).ready(function () {
    new WOW().init();

    $('.select-control').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Select"
    });
    
    $('.select-control.has-search').select2({
        placeholder: "Select"
    });

    $("[data-fancybox]").fancybox({
        thumbs     : false,
        slideShow  : false,
        fullScreen : false
    });

    $(".mcscroll").mCustomScrollbar({
       axis : "y",
       scrollButtons: {
           enable: true
       }
    });
    $(".mcscrollX").mCustomScrollbar({
       axis : "x",
       scrollButtons: {
           enable: true
       }
    });

    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });

    $('.overflow-line-1').trunk8({
       lines: 1,
       tooltip : false
    });
    $('.overflow-line-2').trunk8({
       lines: 2,
       tooltip : false
    });
    $('.overflow-line-3').trunk8({
       lines: 3,
       tooltip : false
    });

    var topbar = $('.site-header').height();
    $(window).scroll(function() {
        if ($(window).scrollTop() > topbar) {
            $(".site-header").addClass("tiny");
        } else {
            $(".site-header").removeClass("tiny");
        }
    });

    $('[data-toggle="menu-mobile"]').click(function(){
        $(this).toggleClass('close');
        $('.global-container').toggleClass('sidebar-open');
        $('nav.menu').toggleClass('open');
    });
    $('[data-toggle="menu-overlay"]').click(function(){
        $('[data-toggle="menu-mobile"]').removeClass('close');
        $('.global-container').removeClass('sidebar-open');
        $('nav.menu').removeClass('open');
    });

    $('.main-slider').slick({
        prevArrow:"<div class='slick-prev'><span class='feather icon-chevron-left'></span></div>",
        nextArrow:"<div class='slick-next'><span class='feather icon-chevron-right'></span></div>",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        focusOnSelect: true,
        rows: 1,
        slidesPerRow:1,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    rows: 1,
                    slidesPerRow:1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    rows: 1,
                    slidesPerRow:1
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    rows: 1,
                    slidesPerRow:1
                }
            }
        ]
    });
    
    // $('.btn-mobile').click(function() {
    //     $('.nav-menu').toggleClass('open');
    //     $(this).toggleClass('close');
    // });
});