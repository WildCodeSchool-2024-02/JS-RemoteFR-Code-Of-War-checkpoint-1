
const avatar = document.getElementById("avatar");

function changeImage() {
    const img = document.getElementById("avatar");
    img.src = "./image/avatar.svg";
}
avatar.addEventListener("click", changeImage);






const bouttonChange = document.createElement("button");
bouttonChange.textContent = "Change name and color";



bouttonChange.addEventListener("click", () => {
    const newBackground = prompt("Enter a color");
    const newName = prompt("Enter your name :");
    const nameSelector = document.getElementById("firstname");
    const background = document.querySelector(".pink-bg");
    nameSelector.textContent = newName;
    nameSelector.style.color = "white";
    background.style.background = newBackground;

});

const parent = document.querySelector(".pink-bg");
parent.appendChild(bouttonChange);

