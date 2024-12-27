document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;
    const stickyOffset = header.offsetTop;
  
    //Sticky Header
    window.addEventListener("scroll", () => {
      if (window.scrollY > stickyOffset) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    //Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
      const isMenuOpen = mobileMenu.classList.toggle('header-menu-mobile--show');
      body.classList.toggle('no-scroll', isMenuOpen);
    });
});
