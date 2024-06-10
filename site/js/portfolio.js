const clicToChange = document.querySelector("#avatar");

clicToChange.addEventListener("click", () => {

    const changeAvatar = document.querySelector("#avatar");
    changeAvatar.src = "https://i.notrefamille.com/0x450/smart/2014/03/31/chat1.jpg"
});


// const firstname = document.querySelector("#firstname");

// firstname.textContent = "Sarah";
// firstname.style.color = "white";

const span = document.querySelector("#firstname");

span.addEventListener("click", function () {
    const backgroundDescription = document.querySelector(".pink-bg");
    span.textContent = "Sarah";
    span.style.color = "white";
    backgroundDescription.style.backgroundColor = "#750ff7";

});






