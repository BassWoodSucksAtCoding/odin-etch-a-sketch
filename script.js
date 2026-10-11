const screen = document.querySelector('#screen');

for (let row=0;row<16;row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("rowDiv");
    rowDiv.style.display = 'flex';
    rowDiv.style.flex = '0 0 0';

    screen.appendChild(rowDiv);

    for (let column=0;column<16;column++) {
        const columnDiv = document.createElement('div');


        columnDiv.style.border = 'solid';
        columnDiv.style.height = '50px';
        columnDiv.style.width = '50px';

        columnDiv.addEventListener('mouseenter', (event) => {
            const div = event.target;
            div.style.backgroundColor = "blue";
        })

        rowDiv.appendChild(columnDiv);
    }
}