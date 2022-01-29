(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        $(".partner-slides").owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    center: true,
                },
                600: {
                    items: 3,
                    nav: false,
                    center: true,
                },
                1000: {
                    items: 5,
                    nav: false,
                    center: true,
                }
            }
        })
    }
    if ($.fn.owlCarousel) {
        $(".hero-slides").owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            responsiveClass: true,
            center: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dot: true,
                },
                600: {
                    items: 1,
                    nav: false,
                    dot: true,
                },
                1000: {
                    items: 1,
                    nav: false,
                    dot: true,
                }
            }
        })
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // Sticky Active Code
    if ($.fn.sticky) {
        $("#header").sticky({
            topSpacing: 0
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // matchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);

    // Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    let openState = `Open +`
    let closeState = `Close -`

    $(".tf-faqs .set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(this).find("span").html(openState)
        } else {
            $(this).addClass("active");
            $(this)
                .siblings(".content")
                .slideDown(200);
            $(this).find("span").html(closeState)
        }
    });

    $(".tf-custom-select .tf-select-input-box input").on("click", function () {
        if ($('.tf-custom-select .select-options').hasClass("open")) {
            $('.tf-custom-select .select-options').removeClass("open");
        } else {
            $('.tf-custom-select .select-options').addClass("open");
        }
    });
    $(".tf-custom-select .select-options a").on("click", function (e) {
        e.preventDefault();
        let selectValue = $(this).text();
        $('.tf-custom-select .tf-select-input-box input').val(selectValue);
        $('.tf-custom-select .select-options').removeClass("open");
    });


})(jQuery);