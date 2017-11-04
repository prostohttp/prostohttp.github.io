$(function() {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    $('.filter-nav a').on('click', function(event) {
        event.preventDefault();
        $('.filter-nav a').removeClass('active');
        $(this).toggleClass('active');
    });

    $(window).scroll(function() {
        var filterTop = $(window).scrollTop();
        var filterH = $('.nav').height() + $('.logo-container').height() + 50;
        var filter = $('.filter');
        if (filterTop > filterH) {
            filter.addClass('fixed-filter');
        } else {
            filter.removeClass('fixed-filter');
        }

    });

    $('.filter-nav a').on('click', function(event) {
        event.preventDefault();
        var ths = $(this);
        var filterId = ths.attr('id');
        $('.content .item').each(function(index) {
            if ($(this).hasClass(filterId)) {
                $(this).removeClass('fhidden');
            } else {
                $(this).addClass('fhidden');
            }

        });
        if (ths.attr('id') == 'all') {
            $('.content .item').removeClass('fhidden');
        }
    });

    $('.icon-container').on('click', function() {
        $('.contacts').fadeToggle('fast');

    });

    $('.m-menu-icon').on('click', function() {
        $('.sidebar').toggleClass('mobile-hidden');
        $(this).toggleClass('menu-icon-toggle');
    });
    // if ($('.sidebar:not(.mobile-hidden)') && $(window).height() < 480) {
    //     console.log('0');

    //     $("body").click(function(event) {
    //         if ($(event.target).closest(".sidebar").length === 0) {
    //             $('.sidebar').toggleClass('mobile-hidden');
    //         }
    //     });
    // }


});