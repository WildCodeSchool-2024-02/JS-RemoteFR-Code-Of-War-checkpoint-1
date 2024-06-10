let avatar = document.querySelector(".avatar");
avatar.addEventListener("click", ()=> {avatar.src="image/avatar.svg"});

//step 2
let secondBanner = document.querySelector(".description");
const button = document.createElement("button");
button.classList.add("buttonChange");
button.textContent = "Modify text and color";
button.style.color = 'white';
button.style.backgroundColor = `transparent`;
button.style.borderColor = 'white';
secondBanner.appendChild(button);

function changeTexteAndColor(promptText) {
    let firstName = document.querySelector("#firstname");
    firstName.textContent = promptText;
    firstName.style.color = 'white';
}

function changeBackground(promptText) {
    let pinkBackground = document.querySelectorAll(".pink-bg");
    pinkBackground.forEach(pinkBackground => {
        pinkBackground.style.backgroundColor = promptText;
    })
}

button.addEventListener("click", () => {
    const colorInput = prompt("Entrez une couleur :");
    changeBackground(colorInput);
    const nameInput = prompt("Entrez votre prénom :");
    changeTexteAndColor(nameInput);
});
