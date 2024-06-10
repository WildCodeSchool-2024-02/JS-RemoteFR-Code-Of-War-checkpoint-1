const avatar = document.querySelector(".avatar");
avatar.addEventListener("click",() =>{
    avatar.src = "/Users/davido/Desktop/Checkpoint-1/JS-RemoteFR-Code-Of-War-checkpoint-1/site/image/avatar.svg";
});

const button = document.querySelector("button");
button.addEventListener("click",() => {
const firstName = document.querySelector("#firstname");
const colorUser = document.querySelector(".description pink-bg");
//alert("click");
   // alert("omg");


    //quand tu clique sur le bouton, tu peux changer l'id firstname et la couleur du background
    colorUser.innerHTML = "Entrer une couleur";
    firstName.textContent = "Entrer votre prénom";
})