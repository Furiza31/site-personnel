let header = document.getElementById("header");
let headerLinks = header.querySelectorAll("a");
let home_container = document.getElementById("home-container");
let about_container = document.getElementById("about-container");
let skills_container = document.getElementById("skills-container");
let qualification_container = document.getElementById("qualification-container");
let contact_container = document.getElementById("contact-container");

for (let i = 0; i < headerLinks.length - 1; i++) {
    if (i == 0) {
        headerLinks[i + 1].classList.add("active");
        headerLinks[i].classList.add("active");
        headerLinks[i].addEventListener("click", function() {
            for (let j = 0; j < headerLinks.length; j++) {
                headerLinks[j].classList.remove("active");
            }
            this.classList.add("active");
            headerLinks[i + 1].classList.add("active");
        });
    } else if (i == 1) {
        headerLinks[i].addEventListener("click", function() {
            for (let j = 0; j < headerLinks.length; j++) {
                headerLinks[j].classList.remove("active");
            }
            this.classList.add("active");
            headerLinks[i - 1].classList.add("active");
        });
    } else {
        headerLinks[i].addEventListener("click", function() {
            for (let j = 0; j < headerLinks.length; j++) {
                headerLinks[j].classList.remove("active");
            }
            this.classList.add("active");
        });
    }
}

window.addEventListener("scroll", () => {
    for (i = 0; i < headerLinks.length; i++) {

    }
});