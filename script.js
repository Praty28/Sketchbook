const container = document.querySelector('#container');

function addDivs(input) {
    for (i=0; i<input**2; i++) {
        let createDiv = document.createElement('div');
        container.appendChild(createDiv);
    }
}

addDivs(100);

const divs = document.querySelectorAll('div:not(#parentDiv):not(#container)');
for (i=0; i < divs.length; i++) {
 divs[i].classList.add('blue');
}

for (let e = 0; e < divs.length; e++) {
    
    divs[e].addEventListener('mouseover', (f) => {if (f.buttons == 1 || f.buttons == 3){
        
        divs[e].classList.add('pink');}

    })

}

