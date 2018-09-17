(function ($) {
    // USE STRICT
    "use strict";
    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div data-loader="ball-scale"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });

        /*[ Slick1 ]
        ===========================================================*/
        var itemSlick1 = $('.slick1').find('.item-slick1');
        var action1 = [];
        var action2 = [];
        var action3 = [];
        var cap1Slide1 = [];
        var cap2Slide1 = [];
        var btnSlide1 = [];

        for(var i=0; i<itemSlick1.length; i++) {
          cap1Slide1[i] = $(itemSlick1[i]).find('.caption1-slide1');
          cap2Slide1[i] = $(itemSlick1[i]).find('.caption2-slide1');
          btnSlide1[i] = $(itemSlick1[i]).find('.wrap-btn-slide1');
        }


        $('.slick1').on('init', function(){

            action1[0] = setTimeout(function(){
                $(cap1Slide1[0]).addClass($(cap1Slide1[0]).data('appear') + ' visible-true');
            },200);

            action2[0] = setTimeout(function(){
                $(cap2Slide1[0]).addClass($(cap2Slide1[0]).data('appear') + ' visible-true');
            },1000);

            action3[0] = setTimeout(function(){
                $(btnSlide1[0]).addClass($(btnSlide1)[0].data('appear') + ' visible-true');
            },1800);
        });


        $('.slick1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: false,
            appendDots: $('.wrap-slick1-dots'),
            dotsClass:'slick1-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            appendArrows: $('.wrap-slick1'),
            prevArrow:'<button class="arrow-slick1 prev-slick1"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick1 next-slick1"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        });

        $('.slick1').on('afterChange', function(event, slick, currentSlide){
            for(var i=0; i<itemSlick1.length; i++) {

              clearTimeout(action1[i]);
              clearTimeout(action2[i]);
              clearTimeout(action3[i]);


              $(cap1Slide1[i]).removeClass($(cap1Slide1[i]).data('appear') + ' visible-true');
              $(cap2Slide1[i]).removeClass($(cap2Slide1[i]).data('appear') + ' visible-true');
              $(btnSlide1[i]).removeClass($(btnSlide1[i]).data('appear') + ' visible-true');

            }

            action1[currentSlide] = setTimeout(function(){
                $(cap1Slide1[currentSlide]).addClass($(cap1Slide1[currentSlide]).data('appear') + ' visible-true');
            },200);

            action2[currentSlide] = setTimeout(function(){
                $(cap2Slide1[currentSlide]).addClass($(cap2Slide1[currentSlide]).data('appear') + ' visible-true');
            },1000);

            action3[currentSlide] = setTimeout(function(){
                $(btnSlide1[currentSlide]).addClass($(btnSlide1)[currentSlide].data('appear') + ' visible-true');
            },1800);
        });
        /*[ Slick2 ]
        ===========================================================*/
        $('.slick2').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            appendArrows: $('.wrap-slick2'),
            prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });
        /*[ Slick3 ]
        ===========================================================*/
        $('.slick3').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            appendArrows: $('.wrap-slick3'),
            prevArrow:'<button class="arrow-slick3 prev-slick3"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick3 next-slick3"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>'
        });
        /*===========================================================*/

        /*  MOBILE MENU BUTTON  */
        $(".hamburger-box.mobile-menu").click(function(e){
            e.stopPropagation();
            $('html, body').scrollTop(0);
            $(".off-canvas-wrapper-inner").toggleClass("is-open-left");
            $(".js-off-canvas-exit").toggleClass("is-visible");
        });
        $('body').click(function(e) {
            if ($('.off-canvas-wrapper-inner').hasClass('is-open-left')) {
              $(".off-canvas-wrapper-inner").toggleClass('is-open-left')
            }
            if ($('.js-off-canvas-exit').hasClass('is-visible')) {
                $(".js-off-canvas-exit").toggleClass("is-visible");
              }
        });
        /* ========================== */

        /*  LANGUAGE ACTIVE  */
        $(".arabic").click(function(e){
            e.stopPropagation();
            e.preventDefault();
            $(".arabic").addClass('active');
            $(".english").removeClass('active');
        });
        $(".english").click(function(e){
            e.stopPropagation();
            e.preventDefault();
            $(".english").addClass('active');
            $(".arabic").removeClass('active');
        });
        /* ========================== */

        /*  FIXED HEADER  */
        $(window).scroll(function(){
            if ($(window).scrollTop() >= $('.container-header').height()) {
                $(".header").addClass('fixed-header');
                $(".header").removeClass('fixed-header-remove');
            }
            else {
                $(".header").removeClass('fixed-header');
                $(".header").addClass('fixed-header-remove');
            }
        });

        $(".menu-collapse-btn").click(function(e){
            e.stopPropagation();
            $(".categories-submenu").toggleClass("menu-slide");
        });
        $(".mobile-categories-subMenu").click(function(e){
            e.stopPropagation();
            $(".mobile-categories-menu1").toggleClass("mobile-categories-menu-slide");
        });
        $(".mobile-language-subMenu").click(function(e){
            e.stopPropagation();
            $(".mobile-categories-menu2").toggleClass("mobile-categories-menu-slide");
        });

})(jQuery);