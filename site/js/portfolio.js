// STEP 1

const imgAvatar = document.querySelector('#avatarImage');

imgAvatar.addEventListener('click', () => {
    imgAvatar.src = "image/avatar-bis.png";
});

// STEP 2
// STEP 3 
// STEP 4

const btnChangeText = document.querySelector('#btn-invite');
const spanFirstName = document.querySelector('#firstname');
const backSection = document.querySelector('.pink-bg'); 

btnChangeText.addEventListener('click', () => {
    const userFirstName = prompt('Your first name.');
    const userColor = prompt('Choose one color.'); 

    document.documentElement.style.setProperty('--lightWildColor', userColor); //Step 4
       
    spanFirstName.textContent = `${userFirstName}`;
    spanFirstName.style.color = "white";
})


// const btnChangeText = document.querySelector('#btn-invite');
// const spanFirstName = document.querySelector('#firstname');
// const backSection = document.querySelector('.pink-bg'); 

// btnChangeText.addEventListener('click', () => {
//     const userFirstName = prompt('Your first name.');
//     const userColor = prompt('Choose one color.'); 

//     backSection.style.backgroundColor = `${userColor}`;  
//     btnChangeText.style.backgroundColor = `${userColor}`;   
//     spanFirstName.textContent = `${userFirstName}`;
//     spanFirstName.style.color = "white";
// })

//STEP 5 

const listes = document.querySelectorAll('.liste');

for(let liste of listes){
    liste.style.color = "#750ff7";
}

// STEP 6

const colFront = document.querySelector('.col-front');
const textsModify = document.querySelectorAll('.list-modify');

const newBtn = document.createElement('button');
newBtn.classList.add('btn-modify');
newBtn.textContent = "Modify";
colFront.appendChild(newBtn);

newBtn.addEventListener('click', () => {
    for(let i = 0; i <= textsModify.length;i++){
        if(i === 0){
            textsModify[i].textContent = "VSCode";
        }else if(i === 1){
            textsModify[i].textContent = "Github";
        }else{
            textsModify[i].textContent = "Terminal";
        }
    }
});

// STEP 7

const ulDevTools = document.querySelector('#ul-tools');
const input = document.querySelector('#input-back');
const btnInput = document.querySelector('#btn-submit');

btnInput.addEventListener('click', () =>{
    const userTools = input.value; 

    const newLi = document.createElement('li');
    newLi.textContent = `${userTools}`;
    ulDevTools.appendChild(newLi);
    input.value = "";
})