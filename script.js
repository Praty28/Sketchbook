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



for (let e=0; e < divs.length; e++) {
    
    divs[e].addEventListener('mouseover', getIndex);
  
    var getIndex = function () {
        divs[e].classList.add('pink');
        console.log(e);
    }
}




