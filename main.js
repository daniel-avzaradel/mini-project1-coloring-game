const gridRight = document.querySelector('.grid-right');

let count = 1;
let pressed = 0;

while (count <= 4800) {
    const gridRightItem = document.createElement('div')
    gridRightItem.classList.add('grid-item');
    gridRightItem.addEventListener('click', event => {
        event.target.style.backgroundColor = background;
        let pressed = 0;
    });
    gridRightItem.addEventListener('mousedown', event => {
        pressed = 1;
        event.target.style.backgroundColor = background;
    });
    gridRightItem.addEventListener('mouseup', event => {
        pressed = 0;
    });
    gridRightItem.addEventListener('mouseover', event => {
        if(pressed == 1) {
            event.target.style.backgroundColor = background;
        }
    });
    gridRight.appendChild(gridRightItem);
    count++
}
const gridItem = document.querySelectorAll('.grid-item')
const color = document.querySelectorAll('.grid-btn')

for (let i=0; i < color.length; i++) {
    color[i].addEventListener("click", selected)
}

let background;

function selected (event) {

    for (let i=0; i < color.length; i++) {
        
        if (color[i].classList.contains('selected')) {
            color[i].classList.remove('selected')
        }
    }
        event.target.classList.toggle('selected')
        let style = getComputedStyle(event.target)
        background = style.backgroundColor;
      
}


const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clear)

function clear() {
    for (let i=0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = "white";
    }
    for (let i=0; i < color.length; i++) {
        
        if (color[i].classList.contains('selected')) {
            color[i].classList.remove('selected')
        }
        background = undefined;
    }
}
