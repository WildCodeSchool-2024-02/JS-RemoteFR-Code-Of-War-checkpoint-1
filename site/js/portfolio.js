// modifier image

const avatar = document.querySelector('.avatar')

avatar.addEventListener('click', function () {
    avatar.src = "image/avatar.svg"
})

// modifier nom 

// const firstName = document.getElementById("firstname")
// let nameSelector = document.querySelector(".chooseName")

// nameSelector.addEventListener('click', function () {
//     let chooseName = prompt("What's your name ?")
//     firstName.textContent = chooseName
// })


// modifier nom et couleur



// const firstName = document.getElementById("firstname");
// let nameSelector = document.querySelector(".chooseName");
// let sectionColor = document.querySelector(".pink-bg")

// nameSelector.addEventListener('click', function () {
//     let chooseColor = prompt("Which background you want ?");
//     let chooseName = prompt("What's your name ?");
//     firstName.textContent = chooseName;
//     sectionColor.style.backgroundColor = chooseColor;
// })


//modifier TOUTES les couleurs + nom


const firstName = document.getElementById("firstname");
let nameSelector = document.querySelector(".chooseName");
let sectionColor = document.querySelectorAll(".pink-bg");
let textColor = document.querySelectorAll(".pink-text");
let linkColor = document.querySelectorAll("a")

nameSelector.addEventListener('click', function () {
    let chooseColor = prompt("Which background you want ?");
    let chooseName = prompt("What's your name ?");
    firstName.textContent = chooseName;

    sectionColor.forEach(sectionColor => {
        sectionColor.style.backgroundColor = chooseColor
    });

    textColor.forEach(textColor => {
        textColor.style.color = chooseColor
    });

    linkColor.forEach(linkColor => {
        linkColor.style.color = chooseColor
    });

})

//modifier liste li

const listTools = document.getElementById("front-dev-tools");
const liTools = listTools.querySelectorAll("li");
const modifyLi = document.querySelector(".modify")

modifyLi.addEventListener('click', function () {
    liTools.forEach(liTools => {
        liTools.textContent = prompt("Which Tools do you use ?")
    })
})

// push nouveaux éléments dans back-end

const backTools = document.querySelector(".backTools")
const pushTools = document.querySelector(".add")
const backList = document.querySelector(".back-list")

pushTools.addEventListener('click', function () {
    const li = document.createElement("li");
    li.textContent = backTools.value;
    backList.appendChild(li);

})