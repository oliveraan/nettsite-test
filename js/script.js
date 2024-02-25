document.addEventListener('DOMContentLoaded', () => {
    const toggleicon = document.querySelector('.toggleicon');
    const navbarMenu = document.querySelector('#navbarMenu');
    toggleicon.addEventListener('click', () => {
      navbarMenu.classList.toggle('navbar-menu-visible');
    });
  });

  function closeNavbarMenu() {
    const navbarMenu = document.querySelector('#navbarMenu');
    navbarMenu.classList.remove('navbar-menu-visible');
  }