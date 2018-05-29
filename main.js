function renderElementsForCreateTable() {
    const containerForInput = document.createElement('div');
    document.body.appendChild(containerForInput);
    containerForInput.style.marginBottom = '10px';

    const trInputValue = document.createElement('input');
    trInputValue.placeholder = 'rows';
    containerForInput.appendChild(trInputValue);

    const tdInputValue = document.createElement('input');
    tdInputValue.placeholder = 'column';
    containerForInput.appendChild(tdInputValue);

    const buttonCreateTable = document.createElement('button');
    containerForInput.appendChild(buttonCreateTable);
    buttonCreateTable.innerHTML = 'Create table';
    buttonCreateTable.style.marginBottom = '10px';

    buttonCreateTable.addEventListener('click', () => renderTable(trInputValue.value, tdInputValue.value));
}

renderElementsForCreateTable();

function renderTable(rows, column) {
    const table = document.createElement('table');
    document.body.appendChild(table);
    table.style.borderCollapse = 'collapse';

    const buttonForChangeColor = document.createElement('button');
    document.body.appendChild(buttonForChangeColor);
    buttonForChangeColor.innerHTML = 'Change color';
    buttonForChangeColor.style.margin = '10px 0';


    for (let i = 0; i < rows; i++) {
        const tr = table.insertRow();
        for (let j = 0; j < column; j++) {
            const td = tr.insertCell();

            td.style.border = '1px solid silver';
            td.style.width = '28px';
            td.style.height = '28px';
        }
    }

    table.addEventListener('click', e => {
        if (e.target.tagName === 'TD') changeColor(e.target);
    });

    buttonForChangeColor.addEventListener('click', () => {
        const arrayTd = table.getElementsByTagName('td');

        for(let i = 0; i < arrayTd.length; i++) {
            changeColor(arrayTd[i]);
        }
    });
}

function changeColor(value) {
    value.style.backgroundColor === 'black' ? value.style.background = 'white' : value.style.background = 'black';
}