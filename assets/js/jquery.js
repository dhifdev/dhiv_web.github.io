$(document).ready(function () {
  $(".opsi").click(function () {
    let id = $(this).prop("id");
    let split = id.split("_");
    let nu_aing = split[1];

    $(".opsi").removeClass("aktif");
    $("#isi_" + nu_aing).addClass("aktif");
    $(".home").slideUp();
    $("#konten_1").slideUp();
    $("#konten_2").slideUp();
    $("#konten_3").slideUp();
    $("#konten_" + nu_aing).slideToggle();
  });
});
