const screen = document.querySelector('#screen');
const topButton = document.querySelector('#topButton');
const title = document.querySelector('h1')

document.body.style.backgroundColor = 'black';

screen.style.height = '960px';
screen.style.width = '960px';
screen.style.border = 'solid';
screen.style.display = 'flex';
screen.style.flexDirection = 'column';
screen.style.gap = '5px';

function createGrid(squareNumber) {
    while (screen.firstChild) {
        screen.removeChild(screen.lastChild)
    }

    for (let row=0;row<squareNumber;row++) {
        const rowDiv = document.createElement('div');

        rowDiv.classList.add("rowDiv");
        rowDiv.style.display = 'flex';
        rowDiv.style.flex = '1 1 0';
        rowDiv.style.alignItems = 'stretch';
        rowDiv.style.gap = '5px';

        screen.appendChild(rowDiv);

        for (let column=0;column<squareNumber;column++) {
            const columnDiv = document.createElement('div');


            columnDiv.style.display = 'flex';
            columnDiv.style.flex = '1 1 0';
            columnDiv.style.alignItems = 'stretch';
            columnDiv.style.opacity = 1;
            columnDiv.style.backgroundColor = '#363636';

            columnDiv.addEventListener('mouseenter', (event) => {
                const div = event.target;

                const opacity = `${div.style.opacity - 0.1}`;
                console.log(opacity)
                div.style.opacity = opacity;

                const newColor = `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${opacity})`;
                div.style.backgroundColor = newColor;

                
            })

            rowDiv.appendChild(columnDiv);
        }
    }
}

createGrid(16);

title.style.color = 'white';
title.style.fontSize = '50px';

topButton.style.fontSize = '30px';
topButton.addEventListener('click', (event) => {
    let squareNumber = prompt("Enter the number of squares")
    if (squareNumber > 100) {
        alert("Input must be less than 100");
    } else {
        createGrid(squareNumber);
    }
})

