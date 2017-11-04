$(function() {
    var sCont = $('.search-container');
    $('.search').on('click', function() {
        sCont.toggleClass('hidden');
    });
    $('.four-elements .title').equalHeights();
    $('.load-more').on('click', function(event) {
        event.preventDefault();
        $(this).parent('.load-more-container').hide();
        $('.hidden-block').removeClass('hidden');
    });

    function resizeW() {
        if ($(window).width() < 992) {
            $('.f-right .row').removeClass('justify-content-end');
        } else {
            $('.f-right .row').addClass('justify-content-end');
        }
    }

    resizeW();

    $(window).resize(function() {

        resizeW();

        if ($(window).width() > 1200) {
            $('.mobile-menu-container').addClass('hidden');
        } else {
            $('.mobile-menu-container').removeClass('hidden');
        }
    });

    $('.mobile-menu a').click(function() {
        $('.mobile-menu-container').animate({top: "0px"}, 150, "linear");
    });
    $('.close-btn').click(function() {
        $('.mobile-menu-container').animate({top: "-100vh"}, 150, "linear");
    });
});