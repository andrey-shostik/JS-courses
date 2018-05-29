const getTableData = () => {
    const inputDiv = document.createElement('div');
    document.body.appendChild(inputDiv);

    const inputTr = document.createElement('input');
    inputTr.placeholder = 'Введите кол-во срок...';
    inputDiv.appendChild(inputTr);

    const inputTd = document.createElement('input');
    inputTd.placeholder = 'Введите кол-во столбцов...';
    inputDiv.appendChild(inputTd);

    const buttonCreateTable = document.createElement('button');
    inputDiv.appendChild(buttonCreateTable);
    buttonCreateTable.innerHTML = 'Сгенерировать таблицу';

    buttonCreateTable.addEventListener('click', () => getTable(inputTr.value, inputTd.value));
};

getTableData();

const getTable = (row, column) => {
    const table = document.createElement('table');
    document.body.appendChild(table);

    const changeColorButton = document.createElement('button');
    document.body.appendChild(changeColorButton);
    changeColorButton.innerHTML = 'Изменить цвет';

    for (let i = 0; i < row; i++) {
        const tr = table.insertRow();
        for ( let j = 0; j < column; j++ ) {
            const td = tr.insertCell();
        };
    };

    table.addEventListener( 'click', e => {
        if ( e.target.tagName === 'TD' ) changeColor(e.target);
    } );

    changeColorButton.addEventListener( 'click', () => {
        const arrayTd = table.getElementsByTagName('td');

        for ( let i = 0; i < arrayTd.length; i++ ) {
            changeColor( arrayTd[i] );
        };
    });
};

const changeColor = (value) => {
    value.style.backgroundColor === 'black' ? value.style.background = 'white' : value.style.background = 'black';
};
