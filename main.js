function crateInput() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const inputRow    = document.createElement('input');
    const inputColumn = document.createElement('input');

    inputRow.setAttribute('type', 'text');
    inputColumn.setAttribute('type', 'text');

    inputColumn.placeholder = 'row';
    inputRow.placeholder = 'column';

    inputColumn.classList.add('input-table');
    inputRow.classList.add('input-table');

    container.appendChild(inputColumn);
    container.appendChild(inputRow);

    const buttonCreateTable = document.createElement('button');
    buttonCreateTable.innerHTML = 'Create table';
    buttonCreateTable.classList.add('input-table');
    container.appendChild(buttonCreateTable);

    const allInput = document.getElementsByClassName('input-table');

    for (let i = 0; i < allInput.length; i++) {
        allInput[i].style.marginRight = '10px';
        allInput[i].style.lineHeight = '17px';
        allInput[i].style.border = '1px solid gray';
    }

    buttonCreateTable.addEventListener('click', () => {
        crateTable(inputColumn.value, inputRow.value)
    });
}

function crateTable(row, column) {

    const containerTable = document.createElement('div');
    containerTable.id = 'current-table';
    document.body.appendChild(containerTable);
    containerTable.style.marginTop = '10px';


    const table  = document.createElement('table');
    const button = document.createElement('button');

    for (let r = 0; r < row; r++) {
        const tr = table.insertRow(0);

        for (let c = 0; c < column; c++) {
            const td = tr.insertCell(0);
            td.style.border = '2px solid gray';
            td.style.width  = '25px';
            td.style.height = '25px';
        }
    }

    table.addEventListener('click', event => {
        if (event.srcElement.nodeName === 'TD')
            changeСolorTd(event.srcElement);
    });

    button.addEventListener('click', () => {
        const allTd = table.getElementsByTagName('td');

        for (let i = 0; i < allTd.length; i++) {
            changeСolorTd(allTd[i]);
        }
    });

    table.style.borderCollapse = 'collapse';
    button.style.marginTop     = '10px';
    button.innerHTML           = 'Change colors';
    table.style.borderCollapse = 'collapse';
    containerTable.appendChild(table);
    containerTable.appendChild(button);

    function changeСolorTd(node) {
        if (node.className !== 'black') {
            node.style.background = 'black';
            node.className        = 'black';
        } else {
            node.style.background = 'white';
            node.className        = 'white';
        }
    }
}

crateInput();