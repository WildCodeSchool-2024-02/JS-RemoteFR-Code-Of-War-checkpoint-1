const avatar = document.querySelector(".avatar");
const firstName = document.querySelector("#firstname");
const descriptionColor = document.querySelector(".description");
avatar.addEventListener('click', () =>{
    avatar.src = "../site/image/avatar.svg"
}
    
)
firstName.textContent = prompt("saisir votre nom");
firstName.style.color = "white";
descriptionColor.style.backgroundColor = "#750ff7";
