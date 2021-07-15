let elText = document.querySelector(".text");
let elForm = document.querySelector("#form");
let elInput = elForm.querySelector("#input") ;
let elList = elForm.querySelector(".list");
let elSelect = elForm.querySelector("#select");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault() ;
    elList.textContent = elInput.value / elSelect.value ; 
    elInput.value = '' ;
})