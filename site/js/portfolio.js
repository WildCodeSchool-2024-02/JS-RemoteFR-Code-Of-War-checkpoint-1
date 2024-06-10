
const firstName = document.getElementById('firstname');
const sectionButton = document.querySelector('.description');
const links = document.querySelectorAll("a");

console.log(sectionButton)
//firstName.textContent = 'Monica';
//firstName.style.color = 'white'


const button = document.createElement("button");
button.classList.add('button-change');
button.textContent = "Modify text and color";
sectionButton.appendChild(button)

button.addEventListener('click', () => {
  const background = prompt("Choose a color:")
  const userName = prompt('What is your name?')
  firstName.textContent = userName;
  firstName.style.color = "white";
  sectionButton.style.backgroundColor = background


})


function changeImage() {
  const avatarsrc = document.querySelector("#avatar-img");
  if (avatarsrc.src = "./image/avatar-bis.png") {
    avatarsrc.src = "./image/avatar.svg";
  } else {
    avatarsrc.src = "./image/avatar-bis.png";
  }

}

links.forEach((link) => {
  link.style.color = "#750ff7";
})
const columnList = document.querySelector(".column");
const ulElements = document.querySelector("#front-dev-tools");
const liElement2 = document.querySelector("#front-dev-tools li:nth-child(2)")
const liElement1 = document.querySelector("#front-dev-tools li:nth-child(1)")
const liElement3 = document.querySelector("#front-dev-tools li:nth-child(3)")

console.log(columnList)
const buttonList = document.createElement("button");

buttonList.classList.add("btn-list");
buttonList.textContent = "Change tools";
columnList.appendChild(buttonList);

buttonList.addEventListener("click", () => {
  
    liElement1.textContent = "node.js";
    liElement2.textContent = "Figma"
    liElement3.textContent = "Boostrap"
    
  })






