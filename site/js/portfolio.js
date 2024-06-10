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



