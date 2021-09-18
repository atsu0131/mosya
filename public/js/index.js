$(function () {
  $(".burger-btn").on("click", function () {
    $(".burger-btn").toggleClass("close");
    $(".bar").toggleClass("white");
    $(".nav-wrapper").fadeToggle(500);
  });
});

$(function () {
  $(".hover-title1").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title2").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title3").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title4").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title5").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title6").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );

  $(".burger-btn").click(function () {
    $("#nav").toggleClass("none");
  });
});
