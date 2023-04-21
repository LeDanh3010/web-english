// make animation dropdown
$(document).ready(function () {
  const $drop = $("#dropdown");
  const $show = $(".nav__drop-Menu");
  const $overlay = $(".overlay");
  const $close = $("#close");
  $drop.on("click", function () {
    $show.addClass("visible");
    $overlay.addClass("visible");
  });
  $overlay.on("click", function () {
    $show.removeClass("visible");
    $overlay.removeClass("visible");
  });
  $close.click(function () {
    $show.removeClass("visible");
    $overlay.removeClass("visible");
  });
});

//make image slide
$(document).ready(function () {
  const $click_btn = $(".btn span");
  const $show_slide = $(".img__slide figure");

  let currentSlide = 0;
  //function current slide
  function showSlide(n) {
    if (n >= $show_slide.length) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = $show_slide.length + 1;
    } else {
      currentSlide = n;
    }
  }
  //show first slide
  showSlide(currentSlide);
  $show_slide.hide();
  $show_slide.eq(currentSlide).show();
  //show slide when click
  $click_btn.on("click", function () {
    showSlide($(this).index());
    $show_slide.fadeOut("slow");
    $show_slide.eq(currentSlide).fadeIn("slow");
  });
  // affect button
  $click_btn.on("click", function () {
    $click_btn.removeClass("choice");
    $(this).addClass("choice");
  });
});
// make affect tabs
$(document).ready(function () {
  const $tab_choice = $(".tabs span");

  let tabs_current = 0;
  function underline_show(n) {
    if (n < 0) {
      tabs_current = 0;
    } else if (n >= $tab_choice.length) {
      tabs_current = 0;
    } else {
      tabs_current = n;
    }
  }
  underline_show(tabs_current);
  $tab_choice.eq(tabs_current).addClass("style_underline");
  $tab_choice.on("click", function () {
    underline_show($(this).index());
    $tab_choice.removeClass("style_underline");
    $tab_choice.eq(tabs_current).addClass("style_underline");
  });
});
