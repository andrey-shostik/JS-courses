function initial() {
    const rowLabel = document.createElement('label');
    const rowNum = document.createElement('input');
    const colNum = document.createElement('input');
    const colLabel = document.createElement('label');
    const confirm = document.createElement('button');
    rowNum.setAttribute('type', 'text');
    colNum.setAttribute('type', 'text');
    rowLabel.innerHTML = 'Input number rows';
    colLabel.innerHTML = 'Input number columns';
    confirm.innerHTML = 'Confirm to create table';

    document.body.appendChild(rowLabel);
    rowLabel.appendChild(rowNum);
    document.body.appendChild(colLabel);
    colLabel.appendChild(colNum);
    document.body.appendChild(confirm);

    confirm.onclick = createTable;
}

function createTable() {
    const myTable = document.createElement('table');
    const tableBody = document.createElement('tbody');
    const rNum = document.getElementsByTagName("input")[0];
    const rowNum = rNum.value;
    const cNum = document.getElementsByTagName("input")[1];
    const colNum = cNum.value;

    myTable.border = '1';

    myTable.appendChild(tableBody);

    for (let i = 0; i < rowNum; i++) {
        const tr = document.createElement('tr');
        tableBody.appendChild(tr);
        for (let j = 0; j < colNum; j++) {
            const td = document.createElement('td');
            td.style.height = '28px';
            td.style.width = '28px';
            td.style.backgroundColor = '#FFFFFF';
            tr.appendChild(td);
        }
    }

    document.body.appendChild(myTable);
    myTable.onclick = function (event) {
        const target = event.target;
        while (target != myTable) {
            if (target.tagName == 'TD') {
                if (target.style.backgroundColor === 'rgb(255, 255, 255)') {
                    target.style.backgroundColor = '#000000';
                } else {
                    target.style.backgroundColor = '#FFFFFF';
                }
                return;
            }
            this.target = target.parentNode;
        }
    }
}

function createBut() {
    const changeCellsColor = document.createElement('button');
    changeCellsColor.innerHTML = 'Invert cells color';
    document.body.appendChild(changeCellsColor);
    changeCellsColor.onclick = changeColorTable;
}

function changeColorTable() {
    const td = document.getElementsByTagName('td');
    for (let i = 0; i < td.length; i++) {
        if (td[i].style.backgroundColor === 'rgb(255, 255, 255)') {
            td[i].style.backgroundColor = '#000000';
        } else {
            td[i].style.backgroundColor = '#FFFFFF';
        }
    }
}

initial();
createBut();

