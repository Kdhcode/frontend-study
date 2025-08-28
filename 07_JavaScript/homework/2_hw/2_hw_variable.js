const changePush = document.querySelector('.change-text');
const changeWidth = document.querySelector('.change-width');
const changeHeight = document.querySelector('.change-height');
const changeImg = document.querySelector('#dung');

function changeText() {
    let changeWidthPx = changeWidth.value;
    let changeheighthPx = changeHeight.value;
    changeImg.style.width = `${changeWidthPx}px`;
    changeImg.style.height = `${changeheighthPx}px`;
}