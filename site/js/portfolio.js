const avatar = document.querySelector(".banner img");
avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
});


const descriptionButton = document.createElement("button");
descriptionButton.classList.add("button");
descriptionButton.textContent = "Modify text and color";

const descriptionBg = document.querySelector(".description.pink-bg");
descriptionBg.appendChild(descriptionButton);


const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");

descriptionButton.addEventListener("click", () => {
    const newColor = prompt("Enter a color");
    pinkBg.forEach(element => {
        element.style.backgroundColor = newColor;
    });
    pinkText.forEach(element => {
        element.style.color = newColor;
    });
    const nameChange = document.getElementById("firstname");
    nameChange.textContent = prompt("Enter your name");
    nameChange.style.color = "white";
});