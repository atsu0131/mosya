$(function () {
  $(".burger-btn").on("click", function () {
    $(".burger-btn").toggleClass("close");
    $(".bar").toggleClass("white");
    $(".nav-wrapper").fadeToggle(500);
  });
});

$(function () {
  $(".nav-title").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );

  $(".burger-btn").click(function () {
    console.log("クリックされました！");
    $("#nav").toggleClass("none");
  });
});
