$(function() {

  //SVG Fallback
  if (!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  }

  //E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  //Chrome Smooth Scroll
  // try {
  //  $.browserSelector();
  //  if($("html").hasClass("chrome")) {
  //    $.smoothScroll();
  //  }
  // } catch(err) {

  // }

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });


});

$(window).load(function() {

  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");

});
$(document).ready(function() {

  // mobile menu
  var mMenu = $('.mob-menu');
  mMenu.removeClass('toggle-menu');
  $('.menu-button').on('click', function() {
    mMenu.toggleClass('toggle-menu');
  });

  // parallax
  // $(".sl-stars").fallings({
  //   velocity: .5,
  //   initialPosition: 0,
  //   bgParallax: true,
  //   bgPercent: "50%"
  // });
  // $(".sl-earth").fallings({
  //   velocity: .2,
  //   initialPosition: 10,
  //   bgParallax: false,
  //   bgPercent: "20%"
  // });

  // $('.slider').enllax();



  //form select castomization Selectric
  $('.domain-select').selectric();

  // equalHeight
  $('.sect-2 .item .descr').equalHeights();
  $('.sect-3 .item-descr').equalHeights();
  $('.sect-4 p').equalHeights();
  // $('.sect-5 .review-container').equalHeights();

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 45,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });
  $('.scroll-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
  });


  $(window).scroll(function() {

    // simple parallax
    var stars = $('.sl-stars'),
        earth = $('.sl-earth'),
        heightTop = $(window).scrollTop();
        // sect1Height = $('.sect-1').height(),
        // headerHeight = $('.top-nav').height() + $('.slider').height();

    if (heightTop < $('.sect-1').offset().top) {
      stars.css({
        'transform': 'translate(0, -' + heightTop / 4 + 'px)'
      });
      earth.css({
        'transform': 'translate(0, ' + heightTop / 4 + 'px)'
      });

    }

  });

});
