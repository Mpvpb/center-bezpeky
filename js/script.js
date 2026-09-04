/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const navigation =
    document.getElementById("navigation");

const navigationLinks =
    document.querySelectorAll(".navigation__link");


mobileMenuButton.addEventListener("click", () => {

    mobileMenuButton.classList.toggle("active");

    navigation.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});


/* Закриваємо меню після натискання */

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenuButton.classList.remove("active");

        navigation.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/* =========================================
   HEADER ON SCROLL
========================================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".safety-card, .news-card, .about__content, .about__image, .contact-info, .map-placeholder"
);


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =========================================
   CLOSE MENU WITH ESC
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        mobileMenuButton.classList.remove("active");

        navigation.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElements =
    document.querySelectorAll("[data-year]");

yearElements.forEach((element) => {

    element.textContent =
        new Date().getFullYear();

});