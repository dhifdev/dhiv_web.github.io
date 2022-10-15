$(document).ready(function () {
  $(".opsi").click(function () {
    let id = $(this).prop("id");
    let split = id.split("_");
    let my_me = split[1];

    $(".opsi").removeClass("aktif");
    $("#isi_" + my_me).addClass("aktif");
    $(".home").slideUp();
    $("#konten_1").slideUp();
    $("#konten_2").slideUp();
    $("#konten_3").slideUp();
    $("#konten_" + my_me).slideToggle();
  });
});
