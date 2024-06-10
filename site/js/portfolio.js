const imgAvatar = document.querySelector('.imgAvatar');

imgAvatar.addEventListener("click", () => {
    imgAvatar.src = 'image/avatar-bis.png';
})

const btnUser = document.querySelector('.btnChange');
const nameUser = document.getElementById('firstname');
const backColor = document.querySelectorAll('.pink-bg');
const styleColor = document.querySelectorAll('.pink-text');


btnUser.addEventListener("click", () => {
    const nameTxt = prompt("What's your name ?");
    const color = prompt("Whitch color do you want ?")

    nameUser.innerHTML = `${nameTxt}`;
    nameUser.style.color = "white";
    backColor.forEach(backColor => {
        backColor.style.backgroundColor = `${color}`;

        styleColor.forEach(styleColor => {
            styleColor.style.color = `${color}`;
        })

    });


})
