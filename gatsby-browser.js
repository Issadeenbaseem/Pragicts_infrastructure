import './src/css/reset.css'
import './src/css/plugins.css'
import './src/css/style.css'
import './src/css/color.css'

import $ from 'jquery'
import Carousel from './src/scripts/carousel'
import CountTo from './src/scripts/count-to'
import FolioHover from './src/scripts/folio-hover'
import FooterAnimation from './src/scripts/footer-animation'
import LightGallery from './src/scripts/lightgallery'
import Menu from './src/scripts/menu'
import ParallaxThumbnails from './src/scripts/parallax-thumbnails'
import ScrollParallax from './src/scripts/scroll-parallax'
import ScrollTo from './src/scripts/scroll-to'
import ScrollToFixed from './src/scripts/scroll-to-fixed'
import Accordion from './src/scripts/accordion'
// import Share from './src/scripts/share'
require('./src/scripts/plugins/smoothscroll')
// import SnowFall from './src/scripts/snowfall'

export const onRouteUpdate = () => {
    $(document).ready(function () {
        //   loader ------------------
        $(".pin").text("Loading")
        $(".loader-wrap").fadeOut(300, function () {
            $("#main").animate({
                opacity: "1"
            }, 300)
        })

        //   Background image ------------------
        var a = $(".bg");
        a.each(function (a) {
            if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
        })

        //   clone ------------------
        $.fn.duplicate = function (a, b) {
            var c = [];
            for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
            return this.pushStack(c);
        };
        $("<div class='container full-height'></div>").appendTo(".sec-lines");
        $("<div class='line-item'></div>").duplicate(5).appendTo(".sec-lines .container");

        $("<div class='half-bg-dec-item'></div>").duplicate(12).appendTo(".half-bg-dec");
        $("<div class='hidden-works-item-dec'><i class='fal fa-arrow-left'></i></div>").appendTo(".hidden-works-item");
        var cr2 = $(".card-popup-rainingvis");
        cr2.each(function (cr) {
            var starcount2 = $(this).attr("data-starrating2");
            $("<i class='fas fa-star'></i>").duplicate(starcount2).prependTo(this);
        })

         // Styles ------------------
        function csselem() {
            $(".height-emulator").css({
                height: $(".fixed-footer").outerHeight(true)
            });
            $(".show-case-slider .show-case-item").css({
                height: $(".show-case-slider").outerHeight(true)
            });
            $(".fullscreen-slider-item").css({
                height: $(".fullscreen-slider").outerHeight(true)
            });
            $(".half-slider-item").css({
                height: $(".half-slider-wrap").outerHeight(true)
            });
            $(".half-slider-img-item").css({
                height: $(".half-slider-img").outerHeight(true)
            });
            $(".hidden-info-wrap-bg").css({
                height: $(window).outerHeight(true) - 80 + "px"
            });
            $(".slideshow-item").css({
                height: $(".slideshow-container").outerHeight(true)
            });
            $(".fs-carousel-item").css({
                height: $(".fs-carousel").outerHeight(true)
            });
        }
        csselem();
        var $window = $(window);
        $window.resize(function () {
            csselem();
        });

        //   slick carousel ------------------
        Carousel()

        //   scroll parallax ------------------
        ScrollParallax()

        // share ----------------------
        // Share()

        // menu --------------------------
        Menu()

        // count to -------------
        CountTo()

        // scroll to -----------------
        ScrollTo()

        // footer animations --------------
        FooterAnimation()

        // parallax thumbnails --------------
        ParallaxThumbnails()

        // scrollToFixed --------------
        ScrollToFixed()

        // lightgallery --------------
        LightGallery()

        // folio hover ------------------------
        FolioHover()

        // accordion ------------------------
        Accordion()

        // snowfall
        // SnowFall()
    })
}
