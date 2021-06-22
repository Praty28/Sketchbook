const container = document.querySelector('#container');

function addDivs(input) {
    for (i=0; i<input**2; i++) {
        let createDiv = document.createElement('div');
        container.appendChild(createDiv);
    }
}

addDivs(16);

const divs = document.querySelectorAll('div:not(#parentDiv):not(#container)');
for (i=0; i < divs.length; i++) {
 divs[i].classList.add('blue');
}
