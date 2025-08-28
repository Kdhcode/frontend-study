const changePush = document.querySelector('.change-text');
const changeWidth = document.querySelector('.change-width');
const changeHeight = document.querySelector('.change-height');
const changeImg = document.querySelector('#dung');

function changeText() {
    changeImg.style.width = `${changeWidth.value}px`;
    changeImg.style.height = `${changeHeight.value}px`;
}