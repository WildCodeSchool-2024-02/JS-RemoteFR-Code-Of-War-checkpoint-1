const imgAvatar = document.querySelector('.imgAvatar');

imgAvatar.addEventListener("click", () => {
    imgAvatar.src = 'image/avatar-bis.png';
})

const btnUser = document.querySelector('.btnChange');
const nameUser = document.getElementById('firstname');
const backColor = document.querySelector('.pink-bg')

btnUser.addEventListener("click", () => {
    const nameTxt = prompt("What's your name ?");
    const color = prompt("Whitch color do you want ?")

    nameUser.innerHTML = `${nameTxt}`;
    nameUser.style.color = "white";

    backColor.style.backgroundColor = `${color}`;
    
} )
