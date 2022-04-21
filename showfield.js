let showForms = document.querySelectorAll(".main_show-box");
document.querySelectorAll("[name='switch']").forEach(elem => {
    elem.addEventListener('change', () => {
        show(elem.id, elem.checked);
    });
});
function show(id, status){
    if(status){
        showForms[id].classList.remove("display-none");
    } else {
        showForms[id].classList.add("display-none");
    }
}