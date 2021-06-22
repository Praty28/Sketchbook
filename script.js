const container = document.querySelector('#container');

function addDivs(input) {
    for (i=0; i<input**2; i++) {
        let createDiv = document.createElement('div');
        container.appendChild(createDiv);
    }
}

addDivs(50);

const divs = document.querySelectorAll('div:not(#parentDiv):not(#container)');
for (i=0; i < divs.length; i++) {
 divs[i].classList.add('blue');
}

for (let e = 0; e < divs.length; e++) {
    
    divs[e].addEventListener('mouseover', (f) => {if (f.buttons == 1){
        
        divs[e].classList.add('pink');}

        else if (f.buttons == 2) { 
            divs[e].classList.remove('pink');
        }
    })

}

const clearGrid = document.querySelector('.clearGrid');

clearGrid.addEventListener('click', () => { divs.forEach(function(el) {
    el.classList.remove("pink")
  })});


