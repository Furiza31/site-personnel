let sun = document.getElementById("sunSvg");
let moon = document.getElementById("moonSvg");
let darkmodeButton = document.getElementById("darkmodeButton");
let darkmode = false;


darkmodeButton.addEventListener("click", () => {
    darkmode = darkmode ? false : true;
    if (darkmode) {
        moon.style.display = "none";
        sun.style.display = "block";
        document.body.classList.toggle("dark");
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
        document.body.classList.toggle("dark");
    }
});