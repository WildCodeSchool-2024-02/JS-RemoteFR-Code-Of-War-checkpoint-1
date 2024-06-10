import findStyleSheet, { findRule } from "../utils/styleSheet.mjs";

const BUTTON = document.querySelector("article > section > button");
const NAME = document.querySelector("article > section > h1 > span");
const SECTION = document.querySelector("article > section");

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