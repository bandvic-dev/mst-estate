document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuItems = document.querySelectorAll('.header-menu__link, .footer-menu__link, *[href="#order"]');
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
    function toggleMenu() {
        const isMenuOpen = mobileMenu.classList.toggle('header-menu-mobile--show');
        body.classList.toggle('no-scroll', isMenuOpen);
    }

    menuToggle.addEventListener('click', toggleMenu);

    //Close Mobile Menu on click
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('header-menu-mobile--show');
            body.classList.remove('no-scroll');
        });
    });

    //Scroll to section
    menuItems.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //Animation on scroll
    function animateOnScroll() {
        const options = {
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const elements = document.querySelectorAll('.animated');
        elements.forEach(el => observer.observe(el));
    }

    animateOnScroll();
});
