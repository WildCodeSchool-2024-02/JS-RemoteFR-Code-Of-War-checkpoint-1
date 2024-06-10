
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

nameButton.addEventListener("click", nameChange);


function nameChange(){
    const yourColor = prompt("Enter your color :");
    const yourName = prompt("Enter your name :");

    changingName.innerHTML = yourName;
    changingName.classList.add("whiteTxt");
    for (let i = 0; i < descriptionSection.length; i++) {
        descriptionSection[i].style.backgroundColor = yourColor;
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

