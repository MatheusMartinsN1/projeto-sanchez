$(document).ready(function () {
  $(".temporadas__container h3").on("click", function () {
    const $container = $(this).closest(".temporadas__container");
    const $allMenus = $(".temporadas__container__item");
    const $currentMenu = $container.find(".temporadas__container__item");

    // Fecha todos os menus e remove rotação de setas
    $allMenus.not($currentMenu).removeClass("-is--open").slideUp();
    $(".temporadas__container h3").not(this).removeClass("-is--open");

    // Alterna o menu atual e a seta
    $currentMenu.toggleClass("-is--open").slideToggle();
    $(this).toggleClass("-is--open");
  });
});

