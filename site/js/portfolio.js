const avatarNew = document.getElementById("avatar");
const firstName = document.getElementById("firstname");
const bgColor = document.querySelectorAll(".pink-bg");
const textColor = document.querySelectorAll(".pink-text");
const linkColor = document.querySelectorAll("a");
const frontButton = document.getElementById("frontendmodif");

function changeAvatar() {
  avatarNew.src = "image/avatar-bis.png";
}

function personnalize() {
  // const newName = prompt("What's your name?");
  // firstName.innerText = newName;
  // firstName.style.color = "white";
  // const newBgColor = prompt("Which background color would you like to have?");
  // bgColor.forEach((div) => (div.style.backgroundColor = newBgColor));
  // const newTextColor = prompt("Which color would you like for the text?");
  const newLinkColor = prompt("Which color would you like for the links?");
  // document.documentElement.style.setProperty("--lightWildColor", newTextColor);
  // textColor.forEach((el) => (el.style.color = newTextColor));
  linkColor.forEach((el) => (el.style.color = newLinkColor));
}

//FRONT TOOLS

frontButton.addEventListener("click", () => {
  console.log("coucou");
  const list = document.querySelectorAll("#front-dev-tools li");

  list.forEach((el) => {
    const newtool = prompt("Enter a tool :");
    el.textContent = newtool;
  });
});

//BACK TOOLS

const input = document.getElementById("tool-input");
const button = document.getElementById("tool-button");
const listBack = document.querySelector(".skills ul");

console.log(listBack);

button.addEventListener("click", () => {
  const toolBack = input.value;
  const li = document.createElement("li");

  li.textContent = toolBack;

  listBack.appendChild(li);
  input.value = "";
  console.log(listBack);
});
