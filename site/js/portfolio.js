// change avatar
const oldAvatar = document.querySelector(".banner img");
const changeAvatar = document.getElementById("fileInput");
const validAvatar = document.getElementById("submitBtn");

oldAvatar.addEventListener("click", function () {
  changeAvatar.style.display = "block";
  validAvatar.style.display = "block";
  validAvatar.addEventListener("click", () => {
    const newAvatar = changeAvatar.value;
    oldAvatar.src = newAvatar;
    changeAvatar.style.display = "none";
    validAvatar.style.display = "none";
    console.log(newAvatar);
  });
});
