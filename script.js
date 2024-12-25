const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector("main"); 

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        const headerHeight = navMenu.offsetHeight; 
        main.style.marginTop = `${headerHeight}px`; 
    } else {
        main.style.marginTop = "0"; 
    }
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
        main.style.marginTop = "0"; 
    })
);


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth',
            });

            targetSection.classList.add('highlight');
            setTimeout(() => {
                targetSection.classList.remove('highlight');
            }, 1000);
        }
    });
});