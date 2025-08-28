const clickNum = document.querySelector('.num'); 
const checkSeason = document.querySelector('.season');
const checkSp = document.querySelector('#sp');
const checkSm = document.querySelector('#su');
const checkFa = document.querySelector('#fa');
const checkWi = document.querySelector('#wi');


function cklickSeason() {
    if (checkSp.checked === true ){
        alert(`${checkSp.value}`);
    } else if (checkSm.checked === true ){
        if (clickNum.value > 35) {
            alert(`${checkSm.value} 폭염 경보`);
        }else if (clickNum.value > 33) {
            alert(`${checkSm.value} 폭염 주의`);
        }else alert(`${checkSm.value}`);
    } else if (checkFa.checked === true ){
        alert(`${checkFa.value}`);
    } else if (checkWi.checked === true ){
        if (clickNum.value < -15) {
            alert(`${checkWi.value} 한파 경보`);
        } else if (clickNum.value < -12) {
            alert(`${checkWi.value} 한파 주의보`);
        }else alert(`${checkWi.value}`);
    }

}