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
