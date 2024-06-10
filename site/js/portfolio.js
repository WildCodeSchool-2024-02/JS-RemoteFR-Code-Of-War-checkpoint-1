
document.addEventListener('DOMContentLoaded', function() {
    
    const avatar = document.getElementById('avatar');

    
    avatar.addEventListener('click', function() {
        
        avatar.src = 'image/avatar.svg';
    });
});
function changeText() {
    let newName = prompt("enter your name :");
    if (newName) {
        let paragraph = document.getElementById("firstname");
        paragraph.innerHTML = paragraph.innerHTML.replace("Matt", `<span style="color: white;">${newName}</span>`);
    }
}