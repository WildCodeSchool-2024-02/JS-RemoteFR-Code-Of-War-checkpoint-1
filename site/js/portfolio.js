//Ne fonctionne pas erreur 404
const getAvatar = document.querySelector("main div img");

getAvatar.addEventListener("click", () => {
    getAvatar.setAttribute("src", "src:" + "./image/avatar copy.svg");
    console.log("click");
    console.log(getAvatar + "Impossible de charger l'image");
});
//Ok
document.getElementById('changeNameButton').addEventListener('click', function () {
    let newBgColor = prompt('Please enter a background color in hexadecimal (#750ff7):');
    if (newBgColor) {
        document.querySelector('.description').style.backgroundColor = newBgColor;
    }
    let newName = prompt('Please enter your name:');
    if (newName) {
        let firstnameElement = document.getElementById('firstname');
        firstnameElement.textContent = newName;
        firstnameElement.style.color = 'white';
    }

    let pinkBgElements = document.querySelectorAll(".pink-bg");
    pinkBgElements.forEach(function (element) {
        element.style.backgroundColor = '#750ff7';
    });
    let pinkTextElements = document.querySelectorAll(".pink-text");
    pinkTextElements.forEach(function (element) {
        element.style.color = '#750ff7'; // Pour les textes avec la classe pink-text
    });
    let links = document.querySelectorAll('.projects a');
    links.forEach(function (link) {
        link.style.color = '#750ff7';
    });
});

// Pas assez de temps pour faire l'étape 6 et 7
