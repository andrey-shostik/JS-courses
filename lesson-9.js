const getTableData = () => {
    const containerForInput = document.createElement('div');
    document.body.appendChild(containerForInput);

    const trInputValue = document.createElement('input');
    trInputValue.placeholder = 'Введите кол-во срок...';
    containerForInput.appendChild(trInputValue);

    const tdInputValue = document.createElement('input');
    tdInputValue.placeholder = 'Введите кол-во столбцов...';
    containerForInput.appendChild(tdInputValue);

    const buttonCreateTable = document.createElement('button');
    containerForInput.appendChild(buttonCreateTable);
    buttonCreateTable.innerHTML = 'Сгенерировать таблицу';

    buttonCreateTable.addEventListener('click', () => getTable(trInputValue.value, tdInputValue.value));
}

getTableData();

const getTable = (rows, column) => {
    const table = document.createElement('table');
    document.body.appendChild(table);

    const changeColorButton = document.createElement('button');
    document.body.appendChild(changeColorButton);
    changeColorButton.innerHTML = 'Изменить цвет';

    for (let i = 0; i < rows; i++) {
        const tr = table.insertRow();
        for (let j = 0; j < column; j++) {
            const td = tr.insertCell();
        }
    }

    table.addEventListener('click', e => {
        if (e.target.tagName === 'TD') changeColor(e.target);
    });

    changeColorButton.addEventListener('click', () => {
        const arrayTd = table.getElementsByTagName('td');

        for(let i = 0; i < arrayTd.length; i++) {
            changeColor(arrayTd[i]);
        }
    });
}

const changeColor = (value) => {
    value.style.backgroundColor === 'black' ? value.style.background = 'white' : value.style.background = 'black';
}