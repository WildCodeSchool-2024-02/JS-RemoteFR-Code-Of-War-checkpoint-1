
// Step 1
const avatarImg = document.getElementById("avatar-image");

avatarImg.addEventListener("click", switchAvatar);
function switchAvatar(){
    avatarImg.src = "image/avatar.svg"
}

// Step 2 to 4
const nameButton = document.getElementById("name-button");
const changingName = document.getElementById("firstname");
const descriptionSection = document.getElementsByClassName("description pink-bg");
const pinkText = document.querySelectorAll(".pink-text");

nameButton.addEventListener("click", nameChange);


function nameChange(){
    const yourColor = prompt("Enter your color :");
    const yourName = prompt("Enter your name :");

    changingName.innerHTML = yourName;
    changingName.classList.add("whiteTxt");
    for (let i = 0; i < descriptionSection.length; i++) {
        descriptionSection[i].style.backgroundColor = yourColor;
    }
    for (let i = 0; i < pinkText.length; i++) {
        pinkText[i].style.color = yourColor;
    }
}

// Step 5

const htmlLinks = document.getElementsByClassName("html-link");
function linksChange(){
    for (let i = 0; i < htmlLinks.length ; i++){
        htmlLinks[i].style.color = "#750ff7";
    }
}
linksChange();

// Step 6

const listeDevTools = document.querySelectorAll("#front-dev-tools li");
const listeButton = document.querySelector("#modify-button");
const newTools = ["VSCode", "Github", "Terminal"];

listeButton.addEventListener("click", changeTxt);

function changeTxt(){
    for (let i = 0; i < listeDevTools.length; i++){
        listeDevTools[i].textContent = newTools[i];
    }
}

// Step 7

const devToolsList = document.querySelector("#dev-tools-list");
const devToolsInput = document.querySelector("#dev-tools-text");
const devToolsBtn = document.querySelector("#dev-tools-button");

devToolsBtn.addEventListener("click", () => {
    const newDevTools = devToolsInput.value;
    const devToolsItem = document.createElement("li");
    devToolsItem.textContent = newDevTools;
    devToolsList.appendChild(devToolsItem);
    devToolsInput.value = "";
});


