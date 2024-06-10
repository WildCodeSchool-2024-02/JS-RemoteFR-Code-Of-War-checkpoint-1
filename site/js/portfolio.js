/*Etape 1 changer l'avatar*/

const avatarChange = document.querySelector(".image_avatar");

avatarChange.addEventListener("click", () => {
    const img = document.querySelector(".image_avatar");
  
    img.src = "image/avatar.svg";
  });


  /*change nom et couleur*/

  const secondBanner = document.querySelector(".description");
  const btn = document.createElement("button");
  btn.classList.add("change_name_color");
  btn.textContent = "Modify text and color";
  secondBanner.appendChild(btn);

  
  const changeColorName = () => {
    const user = prompt("choisi un nom")
    const newName = document.querySelector("#firstname");
    newName.textContent = user;
    newName.style.color = "#ffffff";
    }

  btn.addEventListener("click", () => changeColorName());