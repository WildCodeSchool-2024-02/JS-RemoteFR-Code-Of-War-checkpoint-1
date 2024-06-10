
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


// avatar.addEventListener('click', () => {
//   const avatar = document.getElementById('avatar-img');
//   console.log(avatar);
// })

// change name

