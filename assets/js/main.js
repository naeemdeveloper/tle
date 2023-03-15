(function ($) {
    
    "use strict"
    $(document).ready(function () {

        // menu active
        $('.menu-area li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});

        // menu toggle bar
        $(".menu-toggle-bar").on('click', function(){
            $(this).toggleClass("active");
        });

        // mbolie menu active style
        $('.mobile-menu li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
            $(".mobile-menu").toggleClass("active");
            $(".menu-toggle-bar").toggleClass("active");
		});

        // mobile toggler active
        $(".menu-toggle-bar").on('click', function(){
            $(".mobile-menu").toggleClass("active");
        });

        // offer tab 
        $(".offer-tab ul li").on('click', function() {
            var tabClass = $(this).attr("class");
            $(this).addClass("active").siblings().removeClass("active");
            $("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
        });

        // counterup 
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // testimonial slider
        $('.testimonial-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="prev-arrow fa fa-angle-left"></i>',
            nextArrow: '<i class="next-arrow fa fa-angle-right"></i>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            ]
        });

        // team slider
        $('.team-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="prev-arrow fa fa-angle-left"></i>',
            nextArrow: '<i class="next-arrow fa fa-angle-right"></i>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            ]
        });

    });

    $(window).on('scroll', function () {

        // back to top
        var ScrollTop = $('.back-to-top');

        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });

})(jQuery);
