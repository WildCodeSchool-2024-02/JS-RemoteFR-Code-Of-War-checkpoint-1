const avatarImg = document.getElementById("avatar-bis");

avatarImg.addEventListener("click", switchAvatar);
function switchAvatar(){
    avatarImg.src = "image/avatar.svg"
}

const firstname = document.querySelector("#firstname");

firstname.textContent = "Dijan";
firstname.style.color = "white";

document.body.style.backgroundColor = "pink";
console.log(document.body.style.backgroundColor);
document.body.style.backgroundColor = "#750ff7";

console.log(newString);