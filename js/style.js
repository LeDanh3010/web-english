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
      currentSlide = $show_slide.length - 1;
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
    // make effect with button
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
      tabs_current = $tab_choice.length - 1;
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
// make effect order number
$(document).ready(function () {
  const $num_choice = $(".tabs__num span");
  let tabsNUM_current = 0;
  function NumUnder_show(n) {
    if (n < 0) {
      tabsNUM_current = 0;
    } else if (n >= $num_choice.length) {
      tabsNUM_current = $num_choice.length - 1;
    } else {
      tabsNUM_current = n;
    }
  }
  // call function
  NumUnder_show(tabsNUM_current);
  $num_choice.eq(tabsNUM_current).addClass("style_underline");
  $num_choice.on("click", function () {
    NumUnder_show($(this).index());
    $num_choice.removeClass("style_underline");
    $num_choice.eq(tabsNUM_current).addClass("style_underline");
  });
});
// make affect slide show for about us
$(document).ready(function () {
  const $slideShow = $(".images__slide figure");
  const $buttonSlide = $(".btn__slide span");

  // function current slide
  let CurrentSlide = 0;
  function slideIndex(n) {
    if (n < 0) {
      CurrentSlide = 0;
    } else if (n >= $slideShow.length) {
      CurrentSlide = $slideShow.length - 1;
    } else {
      CurrentSlide = n;
    }
  }
  // call function
  slideIndex(CurrentSlide);
  // hide all slide
  $slideShow.fadeOut();
  //show current slide vs value 0
  $slideShow.eq(CurrentSlide).fadeIn();
  $buttonSlide.on("click", function () {
    slideIndex($(this).index());
    $slideShow.fadeOut();
    $slideShow.eq(CurrentSlide).fadeIn();
    // make effect with button
    $buttonSlide.css("opacity", "0.5");
    $buttonSlide.eq(CurrentSlide).css("opacity", "1");
  });
});
