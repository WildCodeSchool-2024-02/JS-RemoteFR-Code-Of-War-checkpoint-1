document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.getElementById('avatar');
    const firstname = document.getElementById('firstname');
    const changeButton = document.getElementById('changeButton');

    //    Changement de l'avatar 

    const avatarImg1 = './image/avatar-bis.png';
    const avatarImg2 = './image/avatar.svg';

    avatar.addEventListener('click', function () {
        if (avatar.src.endsWith('avatar-bis.png')) {
            avatar.src = avatarImg2;
        } else {
            avatar.src = avatarImg1;
        }
    });
});

// changement du prenom Matt et de la couleur du background

changeButton.addEventListener('click', function () {
    const newName = prompt('Enter your name:');
    if (newName) {
        firstname.textContent = newName;
        firstname.style.color = 'white';

        const newColor = prompt('Enter you color');
        if (newColor) {
            const pinkBackgrounds = document.querySelectorAll('.pink-bg');
            const pinkText = document.querySelectorAll('.pink-text');

            pinkBackgrounds.forEach(function (element) {
                element.style.backgroundColor = newColor;
            });

            pinkText.forEach(function (element) {
                element.style.color = newColor;
            });
        }
    };
});