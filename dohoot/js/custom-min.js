$(function() {
    function n() {
        $(window).width() < 992 ? $(".f-right .row").removeClass("justify-content-end") : $(".f-right .row").addClass("justify-content-end");
    }
    var e = $(".search-container");
    $(".search").on("click", function() {
        e.toggleClass("hidden");
    }), $(".four-elements .title").equalHeights(), $(".load-more").on("click", function(n) {
        n.preventDefault(), $(this).parent(".load-more-container").hide(), $(".hidden-block").removeClass("hidden");
    }), n(), $(window).resize(function() {
        n(), $(window).width() > 1200 ? $(".mobile-menu-container").addClass("hidden") : $(".mobile-menu-container").removeClass("hidden");
    }), $(".mobile-menu a").click(function() {
        $(".mobile-menu-container").animate({
            top: "0px"
        }, 150, "linear");
    }), $(".close-btn").click(function() {
        $(".mobile-menu-container").animate({
            top: "-100vh"
        }, 150, "linear");
    });
});