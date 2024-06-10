const BUTTONFRONTEND = document.querySelector("article.skills > section > section.column > button.modify");
const ULFRONTEND = document.querySelector("article.skills > section > section.column > ul#front-dev-tools");

BUTTONFRONTEND.addEventListener("click", () => {
    const arrayLi = ULFRONTEND.querySelectorAll("li");

    for (const li of arrayLi) {
        const name = prompt("Entre a name :");
        li.textContent = name;
    }
})