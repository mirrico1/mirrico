const multiDefault = () => {
	const elements = document.querySelectorAll('.default');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
		});
	});
  let selectBox = document.querySelector('.selection_box');
	elements[0].addEventListener("change", (event)=> {
    if(event.target.value == 3){
      selectBox.classList.remove("display-none");
    } else {  
      selectBox.classList.add("display-none");
    }
  });
}

multiDefault();

