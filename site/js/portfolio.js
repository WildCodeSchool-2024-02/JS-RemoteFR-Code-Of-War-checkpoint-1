let avatar = document.getElementByClassName('.avatar');

avatar.addEventListener ('click', () => {
    
    if (avatar.src = "/site/image/avatar.svg") {  
     avatar.src = "/site/image/avatar-bis.png";
    } else {
      avatar.src = "/site/image/avatar.svg";
    
    
    }
});
