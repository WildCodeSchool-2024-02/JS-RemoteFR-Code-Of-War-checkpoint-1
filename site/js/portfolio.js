
// Step 1
const avatarImg = document.getElementById("avatar-image");

avatarImg.addEventListener("click", switchAvatar);
function switchAvatar(){
    avatarImg.src = "image/avatar.svg"
}

// Step 2
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

