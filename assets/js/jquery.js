$(document).ready(function () {
  for (let x = 1; x <= 4; x++) {
    $(`#menu${x}`).click(function () {
      $(`.kresek${x}`).slideToggle("slow");
      $(`.kresek${x}`).siblings().css("display", `none`);
    });
  }
});
