const avatar = document.querySelector(".banner img");
avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
});


const descriptionButton = document.createElement("button");
descriptionButton.classList.add("button");
descriptionButton.textContent = "Modify text and color";

const descriptionBg = document.querySelector(".description.pink-bg");
descriptionBg.appendChild(descriptionButton);


const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");

descriptionButton.addEventListener("click", () => {
    const newColor = prompt("Enter a color");
    pinkBg.forEach(element => {
        element.style.backgroundColor = newColor;
    });
    pinkText.forEach(element => {
        element.style.color = newColor;
    });
    const linkColor = document.querySelectorAll("a");
    linkColor.forEach(link => {
        link.style.color = newColor;
    });

    const nameChange = document.getElementById("firstname");
    nameChange.textContent = prompt("Enter your name");
    nameChange.style.color = "white";
});

const frontButton = document.createElement("button");
frontButton.classList.add("button");
frontButton.textContent = "Modify";

const frontColumn = document.querySelector(".column:last-child");
frontColumn.appendChild(frontButton);

const frontDevTools = ["VSCode", "Github", "Terminal"];

frontButton.addEventListener("click", () => {
    const frontDevToolsLi = document.querySelectorAll("#front-dev-tools li");
    frontDevToolsLi.forEach((li, index) => {
        li.textContent = frontDevTools[index];
    });
});

/* Step 7 */

const backButton = document.createElement("button");
backButton.classList.add("button");
backButton.textContent = "Add";

const backInput = document.createElement("input");
backInput.classList.add("input");

const backColumn = document.querySelector(".column");
backColumn.appendChild(backInput);
backColumn.appendChild(backButton);

backButton.addEventListener("click", () => {
    const inputValue = backInput.value;
    const newLi = document.createElement("li");
    newLi.textContent = inputValue;
    const backDevTools = document.querySelector(".column ul");
    backDevTools.appendChild(newLi);
    backInput.value = "";
});


