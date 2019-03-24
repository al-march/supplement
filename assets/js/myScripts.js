// мобильное меню
let buttonMenu = document.querySelector('.my-menu-button');
let sidebar = document.querySelector('.sidebar-menu');



function openSidebar() {

  buttonMenu.onclick = function (e) {
    // задержка анимации гамбургера
    function openOnClick() {
      buttonMenu.classList.toggle('is-active');

    };
    setTimeout(openOnClick, 100)
    sidebar.classList.toggle('is-active');
  }
}

openSidebar();

function closeSidebar() {

  document.onclick = function (e) {
    if (e.target !== sidebar && e.target.parentNode !== sidebar &&  e.target !== buttonMenu && e.target.parentNode !== buttonMenu) {
      sidebar.classList.remove('is-active');
      buttonMenu.classList.remove('is-active');
    }
  }
}
closeSidebar()
