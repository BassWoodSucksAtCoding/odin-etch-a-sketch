const screen = document.querySelector('#screen');
const topButton = document.querySelector('#topButton');

screen.style.height = '960px';
screen.style.width = '960px';
screen.style.border = 'solid';
screen.style.borderColor = 'red';
screen.style.display = 'flex';
screen.style.flexDirection = 'column';

function createGrid(squareNumber) {

    for (let row=0;row<squareNumber;row++) {
        const rowDiv = document.createElement('div');

        rowDiv.classList.add("rowDiv");
        rowDiv.style.display = 'flex';
        rowDiv.style.flex = '1 1 0';
        rowDiv.style.alignItems = 'stretch';

        screen.appendChild(rowDiv);

        for (let column=0;column<squareNumber;column++) {
            const columnDiv = document.createElement('div');


            columnDiv.style.border = 'solid';
            columnDiv.style.display = 'flex';
            columnDiv.style.flex = '1 1 0';
            columnDiv.style.alignItems = 'stretch';

            columnDiv.addEventListener('mouseenter', (event) => {
                const div = event.target;
                div.style.backgroundColor = "blue";
            })

            rowDiv.appendChild(columnDiv);
        }
    }
}

createGrid(16);

topButton.addEventListener('click', (event) => {
    let squareNumber = prompt("Enter the number of squares")
    if (squareNumber > 100) {
        alert("Input must be less than 100");
    } else {
        createGrid(squareNumber);
    }
})

