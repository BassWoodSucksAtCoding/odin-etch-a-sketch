const screen = document.querySelector('#screen');

for (let row=0;row<16;row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("rowDiv");
    rowDiv.style.display = 'flex';

    screen.appendChild(rowDiv);

    for (let column=0;column<16;column++) {
        const columnDiv = document.createElement('div');
        const text = document.createElement('p');

        text.textContent = "div";
        columnDiv.style.border = 'solid';

        columnDiv.addEventListener('mouseenter', (event) => {
            const div = event.target;
            div.style.backgroundColor = "blue"
        })

        rowDiv.appendChild(columnDiv);
        columnDiv.appendChild(text);
    }
}