$(function () {
  $(".burger-btn").on("click", function () {
    $(".burger-btn").toggleClass("close");
    $(".bar").toggleClass("white");
    $(".nav-wrapper").fadeToggle(500);
  });
});
