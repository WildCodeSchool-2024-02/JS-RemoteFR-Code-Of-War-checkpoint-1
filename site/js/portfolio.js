//   CHANGEMENT DE l'AVATAR  
const changePic = document.querySelector(".picpic");
changePic.addEventListener("click", () => {
    const img = document.querySelector(".picpic");
    img.src = "./image/avatar.svg";
});

//   CREATION  BOUTON  avec  PROMPT
const newButton = document.createElement("button");
newButton.type = "button";
newButton.textContent = "Modify text and color";
newBtn.appendChild(newButton);

newButton.addEventListener("click", () => {
    const clickOn = prompt("Enter your name :");
});