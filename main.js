let allForms = document.querySelectorAll('[name="form"]');
let currentForm = 0;

document.querySelectorAll(".main__form-submit-button").forEach(elem => {
    elem.addEventListener('click', (event)=>{
        event.preventDefault();
        let id = +elem.id;
        changeDisplay(id);
    });
});

let allButtons = document.querySelectorAll(".main__menu-button");
allButtons.forEach(elem => {
    elem.addEventListener('click', (event)=>{
        event.preventDefault();
        let id = +elem.id;
        changeDisplay2(id);
    });
});

function changeDisplay(id){
    let clickedForm = allForms[id];
    clickedForm.classList.add('display-none');

    let nextForm = allForms[id + 1];
    nextForm.classList.remove('display-none');
    changeButtonsDisplay(id + 1);
    currentForm = id + 1;
}

function changeDisplay2(id){
    let lastForm = allForms[currentForm];
    lastForm.classList.add('display-none');

    let nextForm = allForms[id];
    nextForm.classList.remove('display-none');

    changeButtonsDisplay(id);
    currentForm = id;
}
function changeButtonsDisplay(id){
    allButtons[currentForm].children[0].classList.remove('main__menu-button-number_active');
    allButtons[currentForm].children[1].classList.remove('main__menu-button-name-active');
    allButtons[id].children[1].classList.add('main__menu-button-name-active');
    allButtons[id].children[0].classList.add('main__menu-button-number_active');
    window.scrollTo({
        top: 300,
        behavior: "smooth"
    });
}

