const changebody = document.querySelector('body');
    

function changeBgColor() {
    let randomNum1 = Math.floor(Math.random()*256) + 0;
    let randomNum2 = Math.floor(Math.random()*256) + 0;
    let randomNum3 = Math.floor(Math.random()*256) + 0;
    changebody.style.backgroundColor = 
    `rgb(${randomNum1},${randomNum2},${randomNum3})`;
    
}
    