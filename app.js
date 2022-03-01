const section = document.querySelectorAll("h2");
const navLinks = document.querySelectorAll(".menu_container a");
const hamburger = document.querySelector(".hamburger")
const menuContainer = document.querySelector(".menu_container")


window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                .querySelector(".menu_container a[href*=" + id + "]")
                .classList.add("active");
            });
        }
    });
};

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuContainer.classList.toggle("active");
})


    
document.querySelector("main").addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
})


document.querySelector(".menu_container a:nth-child(1)").addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
})

document.querySelector(".menu_container a:nth-child(2)").addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
})

document.querySelector(".menu_container a:nth-child(3)").addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
})




