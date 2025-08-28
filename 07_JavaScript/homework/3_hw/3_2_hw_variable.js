const imgChange = document.querySelector('#cha'); 
const imgName = document.querySelector('#charImg'); 

function chageImg() {
    console.log(imgChange.value);
    if (imgChange.value === 'sponge') {
        imgName.innerHTML = (`<img src="../images/sponge.png" alt="스폰지밥" id="charImg" >`);
    } else if (imgChange.value === 'dung') {
        imgName.innerHTML = (`<img src="../images/dung.png" alt="뚱이" id="charImg" >`);
    } else if (imgChange.value === 'human') {
        imgName.innerHTML = (`<img src="../images/human.png" alt="징징이" id="charImg" >`);
    }
    
}