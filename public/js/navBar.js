let header = document.getElementById("header");
let headerLinks = header.querySelectorAll("a");
let home_container = document.getElementById("home-container");
let about_container = document.getElementById("about-container");
let skills_container = document.getElementById("skills-container");
let qualification_container = document.getElementById("qualification-container");
let contact_container = document.getElementById("contact-container");
let container = [home_container, about_container, skills_container, qualification_container, contact_container];

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

window.addEventListener("scroll", debounce(function() {
    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].classList.remove("active");
    }
    for (i = 0; i < container.length; i++) {
        let position = container[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 200) {
            if (i == 0) {
                headerLinks[i + 1].classList.add("active");
                headerLinks[i].classList.add("active");
            } else {
                headerLinks[i].classList.remove("active");
                headerLinks[i + 1].classList.add("active");
            }
        }
    }
}, 100));


function debounce(callback, delay) {
    var timer;
    return function() {
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            callback.apply(context, args);
        }, delay)
    }
}