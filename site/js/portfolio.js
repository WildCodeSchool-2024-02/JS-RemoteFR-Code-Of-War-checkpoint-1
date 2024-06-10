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

nameSelector.addEventListener('click', function () {
    let chooseColor = prompt("Which background you want ?");
    let chooseName = prompt("What's your name ?");
    firstName.textContent = chooseName;

    sectionColor.forEach(sectionColor => {
        sectionColor.style.backgroundColor = chooseColor
    })

    textColor.forEach(textColor => {
        textColor.style.color = chooseColor
    })

})