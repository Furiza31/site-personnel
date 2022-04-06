const skills = document.getElementById("skills").querySelectorAll("div");
const skillsInformation = document.getElementById("skills-information").querySelectorAll("div");
const skillsInformationContainer = document.getElementById("skills-information");
const skillsContainer = document.getElementById("skills");
let skillsReference = [];
let checker = [];

skills.forEach((skill) => {
    skillsInformation.forEach((skillInformation) => {
        if (skillInformation.className == skill.className) {
            skillsReference.push([skill, skillInformation])
        } else if (skillInformation.querySelector("div")) {
            if (skillInformation.querySelector("div").innerHTML == "+") {
                if (!checker.includes(skillInformation.querySelector("div"))) {
                    checker.push(skillInformation.querySelector("div"));
                    skillInformation.querySelector("div").addEventListener("click", () => {
                        skillInformation.style.display = "none";
                        skillsInformationContainer.style.display = "none";
                        skillsContainer.style.filter = "blur(0px)";
                    });
                }
            }
        }
    });
});

for (let i = 0; i < skillsReference.length; i++) {
    skillsReference[i][0].addEventListener("click", () => {
        skillsContainer.style.filter = "blur(4px)";
        skillsInformationContainer.style.display = "block";
        skillsReference[i][1].style.display = "block";
    });
}