let interaction = document.querySelector(".interaction");
let submit = document.querySelector(".submit");
let card = document.querySelector(".card-1");
let card2 = document.querySelector(".card-2");
const range = document.querySelector(".range-number")


interaction.addEventListener('click', evento => {
    
    let numberSelected = evento.target.innerText;
    range.innerText = numberSelected;
    
    if (numberSelected > 0 || numberSelected <= 5) {
        submit.addEventListener('click', ()=> {
            card.style.display = "none"
            card2.style.display = "flex"
            
        })
    }

})

