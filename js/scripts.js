$(document).ready(function () {
  var menuBtn = $("#menu_icon"),
    menu = $("#ul-nav");

  menuBtn.click(function () {
    if (menu.hasClass("show")) {
      menu.removeClass("show");
    } else {
      menu.addClass("show");
    }
  });
});
