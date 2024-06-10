// STEP 1

const imgAvatar = document.querySelector('#avatarImage');

imgAvatar.addEventListener('click', () => {
    imgAvatar.src = "image/avatar-bis.png";
});

// STEP 2

const btnChangeText = document.querySelector('#btn-invite');
const spanFirstName = document.querySelector('#firstname');

btnChangeText.addEventListener('click', () => {
    const userFirstName = prompt('Your first name.');
    spanFirstName.textContent = `${userFirstName}`;
    spanFirstName.style.color = "white";
})