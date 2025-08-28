const buttonPush = document.querySelector('.plue');
const spongeImg = document.querySelector('#sponge');
let count = 1;
buttonPush.addEventListener('click', function () {
    count++;
    spongeImg.style.width = `${count}00px`;
    spongeImg.style.height = `${count}00px`;
});