const AVATAR = document.querySelector("main > section > img");
const BUTTON = document.querySelector("article > section > button");
const NAME = document.querySelector("article > section > h1 > span");
const SECTION = document.querySelector("article > section");

const BUTTONFRONTEND = document.querySelector("article.skills > section > section.column > button.modify");
const ULFRONTEND = document.querySelector("article.skills > section > section.column > ul#front-dev-tools");

const INPUTADD = document.querySelector("div.add > input[type = 'text']");
const BUTTONADD = document.querySelector("div.add > button");
const FEEDBACKADD = document.querySelector("div.add > p");
const ULBACKEND = document.querySelector("article.skills > section > section.column > ul#backend");

function findStyleSheet(name, styleSheets = document.styleSheets) { 
    for (const styleSheet of styleSheets) {
        const splitStyleSheet = styleSheet.href.split("/");
        if (splitStyleSheet[splitStyleSheet.length - 1] === name) return styleSheet
    }
    return undefined;
}

function findRule(styleSheet, nameRule) {
    for (const rule of styleSheet.rules) {
        if (rule.selectorText === nameRule) return rule
    }
    return undefined;
}

BUTTON.addEventListener("click", () => {
    const color = prompt("Enter a color :");
    if (!color) return;
    const name = prompt("Enter your name :");
    if (!name) return;
    const styleSheet = findStyleSheet("portfolio.css");
    const backgroundColor = findRule(styleSheet, ".pink-bg");
    const textColor = findRule(styleSheet, ".pink-text");

    backgroundColor.style.backgroundColor = color;
    textColor.style.color = color;
    SECTION.style.backgroundColor = color;
    NAME.textContent = name;
    NAME.style.color = "white"
})

AVATAR.addEventListener("click", () => {
    AVATAR.src =
        AVATAR.src === "http://127.0.0.1:5500/site/image/avatar.svg"
            ? "./image/avatar-bis.png"
            : "./image/avatar.svg";
});

BUTTONFRONTEND.addEventListener("click", () => {
    const arrayLi = ULFRONTEND.querySelectorAll("li");

    for (const li of arrayLi) {
        const name = prompt("Entre a name :");
        li.textContent = name;
    }
})

const changeFeedBack = (text, error = false) => {
    console.log(FEEDBACKADD)
    if (!FEEDBACKADD) return;
    FEEDBACKADD.style.color = error ? "red" : "";
    FEEDBACKADD.textContent = text;
    setTimeout(() => {
        FEEDBACKADD.textContent = "";
    }, 2000)
}

const addEvent = () => {
    const li = document.createElement("li");

    if (!INPUTADD.value) return changeFeedBack("Veuillez saisir un text !", true);
    li.textContent = INPUTADD.value;
    ULBACKEND.appendChild(li);
    INPUTADD.value = "";
}

BUTTONADD.addEventListener("click", addEvent);
INPUTADD.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addEvent();
});