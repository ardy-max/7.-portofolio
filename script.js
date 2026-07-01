/**
 * Portofolio Core Javascript Logic (Multi-page Version)
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inisialisasi Lucide Icons
    lucide.createIcons();

    // 2. Navigasi Mobile (Hamburger Menu)
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            
            // Ubah icon hamburger ke X atau sebaliknya
            const icon = navToggle.querySelector("i");
            if (navMenu.classList.contains("open")) {
                icon.setAttribute("data-lucide", "x");
            } else {
                icon.setAttribute("data-lucide", "menu");
            }
            lucide.createIcons(); // Re-render icons
        });

        // Tutup menu jika link di klik
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                const icon = navToggle.querySelector("i");
                icon.setAttribute("data-lucide", "menu");
                lucide.createIcons();
            });
        });
    }

    // 3. Sticky Header Navbar
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 5. Reveal on Scroll Animation (Intersection Observer)
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    if (revealElements.length > 0) {
        if (!!window.IntersectionObserver) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            revealElements.forEach(element => {
                observer.observe(element);
            });
        } else {
            revealElements.forEach(element => {
                element.classList.add("active");
            });
        }
    }

    // 6. Back to Top Button
    const backToTopBtn = document.getElementById("back-to-top");
    
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
