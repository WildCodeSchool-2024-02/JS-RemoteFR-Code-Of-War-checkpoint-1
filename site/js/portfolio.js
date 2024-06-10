// modifier l'avatar à chaque click: 

const avatarImage = document.querySelector('img[src="./image/avatar.svg"]');
let isAvatarBis = false;

if (avatarImage) {
    avatarImage.addEventListener('click', () => {
        if (isAvatarBis) {
            avatarImage.src = "./image/avatar.svg";
        } else {
            avatarImage.src = "./image/avatar-bis.png";
        }
        isAvatarBis = !isAvatarBis;
    });
}


// bouton pour changer le prénom ( mit en commentaire suite au bouton suivant )

// const firstName = document.getElementById('firstname');

// firstName.addEventListener("click", () => {
//     const newFirstName = prompt("Entrez le nouveau prénom :");
//     if (newFirstName !== null) {
//         firstName.textContent = newFirstName;
//     }
// });

// Bouton pour changer prénom et couleur + style du bouton:

const buttonSection = document.querySelector('.description.pink-bg');
const elementsToChangeColor = document.querySelectorAll('.pink-bg, .purple-bg');
const textElementsToChangeColor = document.querySelectorAll('.pink-text');

const colorButton = document.createElement('button');
colorButton.style.backgroundColor = 'pink';
colorButton.style.border = '2px solid white';
colorButton.style.width = '160px'
colorButton.style.height = '50px'
colorButton.textContent = 'Modifier texte et couleur';

colorButton.addEventListener('click', () => {
    const newColor = prompt(
        "Entrez une nouvelle couleur:"
    );
    if (newColor !== null) {
        const newName = prompt("Entrez un nouveau prénom :");
        if (newName !== null) {
            [
                buttonSection, ...elementsToChangeColor
            ].forEach(element => {
                element.style.backgroundColor = newColor;
            });
            colorButton.style.backgroundColor = newColor;
            document
                .getElementById('firstname')
                .textContent = newName;
            textElementsToChangeColor.forEach(element => {
                element.style.color = newColor;
            });
        }
    }
});

buttonSection.appendChild(colorButton);


// Changement de couleur des liens 

const links = document.querySelectorAll('a');

links.forEach(link => {
    if (getComputedStyle(link).color === 'rgb(0, 0, 0)') {
        link.style.color = '#750ff7';
    }
});

// Bouton pour modifier la liste à puces de la section front-end: 

const liElements = document.querySelectorAll('#front-dev-tools li');
const modifyElementsButton = document.createElement('button');
modifyElementsButton.textContent = 'Modifier';
modifyElementsButton.id = 'modifyElementsButton';

const newTexts = ['VSCode', 'Github', 'Terminal'];

modifyElementsButton.addEventListener('click', () => {
    
    liElements.forEach((li, index) => {
        li.textContent = newTexts[index];
    });
});

document.getElementById('front-dev-tools').appendChild(modifyElementsButton);


// Bouton pour modifier l'ul de sa section back-end

const ulElement = document.getElementById('back-dev-tools');
const formElement = document.createElement('form');

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = formElement.querySelector('input[type="text"]').value;
    const newLiElement = document.createElement('li');
    newLiElement.innerHTML = inputValue;
    ulElement.appendChild(newLiElement);
});

formElement.innerHTML = '<input type="text" placeholder="Enter a dev tool" required><button type="submit">Add Tool</button>';

ulElement.parentNode.insertBefore(formElement, ulElement.nextSibling);












