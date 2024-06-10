const avatarImg = document.getElementById("avatar-bis");

avatarImg.addEventListener("click", switchAvatar);
function switchAvatar(){
    avatarImg.src = "image/avatar.svg"
}

const firstname = document.querySelector("#firstname");

firstname.textContent = "Dijan";
firstname.style.color = "white";

console.log(newString);