// モーダルウィンドウ
$(function () {
    $("#open-modal-1").click(function () {
      $("#modal__area-1").fadeIn();
    });
    $("#close-modal, #modal__bg").click(function () {
      $("#modal__area-1").fadeOut();
    });
  });
$(function () {
    $("#open-modal-2").click(function () {
      $("#modal__area-2").fadeIn();
    });
    $("#close-modal, #modal__bg").click(function () {
      $("#modal__area-2").fadeOut();
    });
  });