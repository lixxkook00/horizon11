;
(function($) {
    "use strict";
    $(document).ready(function() {
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function(e) {
            e.preventDefault();
        })
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");
            $(".menu-item-has-children a").on('click', function(e) {
                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }
        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });
        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }
        var $Container = $('.isotop-filter-area');
        if ($Container.length > 0) {
            $('.property-filter-area').imagesLoaded(function() {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.project-filter-item',
                    masonry: {
                        gutter: 0
                    }
                });
                $(document).on('click', '.isotop-filter-menu > button', function() {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click', '.isotop-filter-menu > button', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#td-search-popup');
        var sidebarMenu = $('#sidebar-menu');
        $(document).on('click', '#body-overlay', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '.search-bar-btn', function(e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });
        $(document).on('click', '.sidebar-menu-close', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#navigation-button', function(e) {
            e.preventDefault();
            sidebarMenu.addClass('active');
            bodyOvrelay.addClass('active');
        });
        var leftArrow = '<i class="fa fa-angle-left"></i>';
        var leftArrow2 = '<i class="fa fa-arrow-left"></i>';
        var rightArrow = '<i class="fa fa-angle-right"></i>';
        var rightArrow2 = '<i class="fa fa-arrow-right"></i>';
        if ($('.slider-1-col').length) {
            $('.slider-1-col').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: false,
                smartSpeed: 1500,
                items: 1,
                navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            });
        }
        $('.course-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            items: 1,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.course-slider-2').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            navText: false,
            smartSpeed: 1500,
            items: 1,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.category-slider').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            navText: [leftArrow2, rightArrow2],
            items: 1,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.testimonial-slider').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            margin: 30,
            items: 1,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.testimonial-slider-2').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            navigation: true,
            smartSpeed: 1500,
            items: 1,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.work-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            navigation: true,
            smartSpeed: 1500,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            items: 1,
            responsive: {
                992: {
                    items: 2
                },
            }
        });
        $('.client-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            items: 1,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.about-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            items: 1,
        });
        $('.blog-slider').owlCarousel({
            center: true,
            items: 2,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            navText: false,
            margin: 25,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.blog-slider-2').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            navigation: true,
            smartSpeed: 1500,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            items: 1,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.video-play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
    });
    $(window).on("scroll", function() {
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }
    });

    // handle loading page
    $(window).on('load', function() {
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();
        $(document).on('click', '.cancel-preloader a', function(e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });
    });
    $('.btn-date').on('click', function(e) {
        e.preventDefault();
        $.dateSelect.show({
            element: 'input[name="date2"]'
        });
    });
})(jQuery);