import retrieveSavedSuggestion, { saveSuggestion } from "../utils/saved.mjs";

const INPUTADD = document.querySelector("div.add > input[type = 'text']");
const BUTTONADD = document.querySelector("div.add > button");
const FEEDBACKADD = document.querySelector("div.add > p");
const DATALIST = document.querySelector("div.add > datalist");
const ULBACKEND = document.querySelector("article.skills > section > section.column > ul#backend");

const arraySuggestion = retrieveSavedSuggestion();

const changeFeedBack = (text, error = false) => {
    console.log(FEEDBACKADD)
    if (!FEEDBACKADD) return;
    FEEDBACKADD.style.color = error ? "red" : "";
    FEEDBACKADD.textContent = text;
    setTimeout(() => {
        FEEDBACKADD.textContent = "";
    }, 2000)
}

const addEvent = async () => {
    const li = document.createElement("li");

    if (!INPUTADD.value) return changeFeedBack("Veuillez saisir un text !", true);
    const value = INPUTADD.value;
    li.textContent = value;
    arraySuggestion.push(value);
    saveSuggestion(arraySuggestion)
    ULBACKEND.appendChild(li);
    INPUTADD.value = "";
}

const suggestions = arraySuggestion.concat(["Workbench", "PHP", "Javascript", "Express", "Node", "Fastify"]);
suggestions.forEach((suggestion) => {
    const option = document.createElement("option");
    option.value = suggestion;
    DATALIST.appendChild(option);
});

BUTTONADD.addEventListener("click", addEvent);
INPUTADD.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addEvent();
});