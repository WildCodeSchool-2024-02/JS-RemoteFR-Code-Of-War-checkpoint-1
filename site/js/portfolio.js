// STEP 1

const imgAvatar = document.querySelector('#avatarImage');

imgAvatar.addEventListener('click', () => {
    imgAvatar.src = "image/avatar-bis.png";
});

// STEP 2
// STEP 3 

const btnChangeText = document.querySelector('#btn-invite');
const spanFirstName = document.querySelector('#firstname');

const backSection = document.querySelector('.pink-bg'); //STEP 3

btnChangeText.addEventListener('click', () => {
    const userFirstName = prompt('Your first name.');

    const userColor = prompt('Choose one color.');    //STEP 3
    backSection.style.backgroundColor = `${userColor}`;  //STEP 3
    btnChangeText.style.backgroundColor = `${userColor}`;   //STEP 3

    spanFirstName.textContent = `${userFirstName}`;
    spanFirstName.style.color = "white";
})



