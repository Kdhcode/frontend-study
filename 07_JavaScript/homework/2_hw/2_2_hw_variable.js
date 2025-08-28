const addText = document.querySelector('.add-text');
const saveText = document.querySelector('.save-text');

function addButton() {
    saveText.innerHTML += (addText.value);
    addText.value = ('');
}

