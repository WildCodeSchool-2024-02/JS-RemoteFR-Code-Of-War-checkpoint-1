const avatar = document.querySelector(".avatar");
const firstName = document.querySelector("#firstname");
avatar.addEventListener('click', () =>{
    avatar.src = "../site/image/avatar.svg"
}
    
)

firstName.textContent = prompt("saisir votre nom");
firstName.style.color = "white";
console.log(firstName);