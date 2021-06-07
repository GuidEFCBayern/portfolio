window.onload = function() {
    $(".preload").delay(400).fadeOut("200", function () {
        $('#preload').addClass('move');
        $('#preload').fadeOut(200);
    });
};

$(document).ready(function () {

    MultiScreen.init();

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
        $('.nav-menu').toggleClass('open');
        $('nav.menu').toggleClass('open');
    });
    $('[data-toggle="menu-overlay"]').click(function(){
        $('[data-toggle="menu-mobile"]').removeClass('close');
        $('.global-container').removeClass('sidebar-open');
        $('.nav-menu').removeClass('open');
        $('nav.menu').removeClass('open');
    });
    $('nav.menu li a.link').click(function(){
        $('[data-toggle="menu-mobile"]').removeClass('close');
        $('.global-container').removeClass('sidebar-open');
        $('.nav-menu').removeClass('open');
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

    $('.btn-menu-home').click(function() {
        $('nav.menu li').removeClass('active');
        $('nav.menu li.menu-home').addClass('active');
    });
    $('.btn-menu-about').click(function() {
        $('nav.menu li').removeClass('active');
        $('nav.menu li.menu-about').addClass('active');
    });
    $('.btn-menu-contact').click(function() {
        $('nav.menu li').removeClass('active');
        $('nav.menu li.menu-contact').addClass('active');
    });
    $('.btn-menu-portfolio').click(function() {
        $('nav.menu li').removeClass('active');
        $('nav.menu li.menu-portfolio').addClass('active');
    });
    $('.btn-AboutMe').click(function() {
        $('#AboutMe').addClass('open');
    });
    $('.btn-Education').click(function() {
        $('#Education').addClass('open');
    });
    $('.btn-Skill').click(function() {
        $('#Skill').addClass('open');
    });
    $('.btn-Work').click(function() {
        $('#Work').addClass('open');
    });
    $('.btn-close-menu').click(function() {
        $('#AboutMe').removeClass('open');
        $('#Education').removeClass('open');
        $('#Skill').removeClass('open');
        $('#Work').removeClass('open');
    });

    $('.-section-contact .bg-world').iosParallax({
        movementFactor: 50
    });

    particleground(document.getElementById('particles'), {
        dotColor: '#151515',
        lineColor: '#151515'
    });
    var intro = document.getElementById('intro');
        intro.style.marginTop = - intro.offsetHeight / 2 + 'px';

    $('#Work').ripples({
        resolution: 512,
        dropRadius: 20, //px
        perturbance: 0.04,
    });

    $('#ckLine').ckLine({
        leftRight: false,
        strokeColor: 'rgba(0,0,0,0.02)',
        interval: 400,
        animateTime: 800,
        animationTimeRange: [400, 800]
    });

    $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay:false,
        dots: true,
        fade: false,
        vertical: false,
        draggable: true,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        rows: 1,
        slidesPerRow:1
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        e.target
        e.relatedTarget
        $('.portfolio-slider').slick('setPosition');
    });
    $('.btn-menu-portfolio').click(function(e){
        e.target
        e.relatedTarget
        $('.portfolio-slider').slick('setPosition');
    });

});