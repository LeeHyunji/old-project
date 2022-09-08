
$(window).on("load", function() {
    "use strict";

    
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 1) {
            jQuery("header").addClass("sticky animated slideInDown");
        } else {
            jQuery("header").removeClass("sticky animated slideInDown");
        }
    });

    // CUSTOM TABS

    $(".tab-btns li").on("click", function () {
        var tab_idd = $(this).attr("data-tab");
        $(".tab-btns li").removeClass("active-btn");
        $(".tab-data").removeClass("active");
        $(this).addClass("active-btn");
        $("#" + tab_idd).addClass("active animated fadeIn");
    });

    // SEARCH FORM 

    $(".searchh, .header-v5 .header-content .search-hd>a").on("click", function() {
      $(".search-form-field").slideToggle();
    });

    $(".testimonial-slider.dots-hide .slick-prev").on("click", function() {
      $(this).addClass("active");
      $(".testimonial-slider.dots-hide .slick-next").addClass("not-active");
    });
    $(".testimonial-slider.dots-hide .slick-next").on("click", function() {
      $(".testimonial-slider.dots-hide .slick-prev").removeClass("active");
      $(this).removeClass("not-active");
      $(this).addClass("active");
    });
    
    $('.a-nav-toggle').on('click', function() {
        if ($('html').hasClass('body-menu-opened')) {
            $('html').removeClass('body-menu-opened').addClass('body-menu-close');
        } else {
            $('html').addClass('body-menu-opened').removeClass('body-menu-close');
        }
    });


    // RESPONSIVE MOBILE MENU 

    $(".nav-toggle-btn").on("click", function(){
      $(".responsive-menu").toggleClass("active");
    });

    $(".mobile-menu ul").parent().addClass("menu-item-has-children");
    $(".mobile-menu li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    $(".close-menu").on("click", function() {
      $(".responsive-menu").removeClass("active");
      $("html").removeClass("body-menu-opened");
      return false;
    });


    $(".testi-thumbs li").on("click", function () {
        var tab_id = $(this).attr("data-tab");
        $(".testi-thumbs li").removeClass("current");
        $(".testi-v3-slide").removeClass("current");
        $(this).addClass("current animated fadeIn");
        $("#" + tab_id).addClass("current animated zoomIn");
        return false;
    });

    // handle links with @href started with '#' only
    $(document).on('click', '.arrow-down[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });

    

});