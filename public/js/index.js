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
      $(".js-1").toggleClass("on");
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title2").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
      $(".js-2").toggleClass("on");
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title4").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
      $(".js-3").toggleClass("on");
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title5").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
      $(".js-5").toggleClass("on");
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
  $(".hover-title6").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
      $(".js-6").toggleClass("on");
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );

  $(".burger-btn").click(function () {
    $("#nav").toggleClass("none");
  });

  $(function () {
    // アイコンを囲うaタグの指定
    var toggles = $(".js-1");
    //アイコンをクリックでクラスの切替え
    toggles.click(function (event) {
      event.preventDefault();
      toggles.toggleClass("on");
      if (toggles.hasClass("on")) {
      } else {
        $(".menuSub").slideUp();
      }
    });
  });
  $(function () {
    // アイコンを囲うaタグの指定
    var toggles = $(".js-2");
    //アイコンをクリックでクラスの切替え
    toggles.click(function (event) {
      event.preventDefault();
      toggles.toggleClass("on");
      if (toggles.hasClass("on")) {
      } else {
        $(".menuSub").slideUp();
      }
    });
  });
  $(function () {
    // アイコンを囲うaタグの指定
    var toggles = $(".js-3");
    //アイコンをクリックでクラスの切替え
    toggles.click(function (event) {
      event.preventDefault();
      toggles.toggleClass("on");
      if (toggles.hasClass("on")) {
      } else {
        $(".menuSub").slideUp();
      }
    });
  });
  $(function () {
    // アイコンを囲うaタグの指定
    var toggles = $(".js-4");
    //アイコンをクリックでクラスの切替え
    toggles.click(function (event) {
      event.preventDefault();
      toggles.toggleClass("on");
      if (toggles.hasClass("on")) {
      } else {
        $(".menuSub").slideUp();
      }
    });
  });
  $(function () {
    // アイコンを囲うaタグの指定
    var toggles = $(".js-5");
    //アイコンをクリックでクラスの切替え
    toggles.click(function (event) {
      event.preventDefault();
      toggles.toggleClass("on");
      if (toggles.hasClass("on")) {
      } else {
        $(".menuSub").slideUp();
      }
    });
  });
});
