// Step 1 :
const newAvatar = document.querySelector(".img-avatar");
newAvatar.addEventListener("click", function () {
    newAvatar.src = "./image/avatar-bis.png";
    newAvatar.alt = "new avatar";
});




// Step 2 :

const button = document.createElement("button");
button.innerHTML = "Modify text and color";
button.style.backgroundcolor = "yellow";
document.body.appendChild(button);
button.addEventListener("click", function () {
    const name = prompt("Enter your name");
    const colorName = prompt("Enter a color");
    const firstname = document.querySelector("firstname");
    firstname.innerHTML = name;
    firstname.style.color = "white";
});







/*const form = document.querySelector("#form");
const inputName = document.querySelector("inputName");
const firstname = document.querySelector("firstname");
form.onsubmit = function (event) {
    event.preventDefault();
    newName.innerHTML = inputName.value;
    newName.style.color = "white";
    firstname.appendChild(newName);
    inputName.value = "";
};*/

//step 3:



//step 4:
const body = document.querySelectorAll(".body");
body.style.color = inputColor.value;
body.style.backgroundcolor


