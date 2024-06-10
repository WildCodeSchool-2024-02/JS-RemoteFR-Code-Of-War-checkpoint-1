const AVATAR = document.querySelector("main > section > img");

AVATAR.addEventListener("click", () => {
    const splitAvatarSrc = AVATAR.src.split("/");
    AVATAR.src =
        splitAvatarSrc[splitAvatarSrc.length - 1] === "avatar.svg"
            ? "./image/avatar-bis.png"
            : "./image/avatar.svg";
});