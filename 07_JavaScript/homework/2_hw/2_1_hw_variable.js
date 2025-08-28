const bollCon = document.querySelector('.boll-container');
const bollEl = document.querySelector('div.boll');
const bollAdd = document.querySelector('.add-boll');
const background = document.querySelector('.background'); 

let count = 1; 
bollAdd.addEventListener('click',function () {
    bollCon.innerHTML+=`<div class="boll"></div>`;
    count ++;
})

function cont(){
    if(count % 2 === 1){
        alert('홀수 입니다.');
    } else{
        alert('짝수 입니다.');
    }
};

function reva() {
    bollCon.innerHTML =`<div class="boll"></div>`;
    count =1;
}