const tableCreateBlock = document.createElement('div');
document.body.appendChild(tableCreateBlock);

const tableBlock = document.createElement('div');
document.body.appendChild(tableBlock);

const inputTdNumber = document.createElement('input');
inputTdNumber.setAttribute('type', 'text');
inputTdNumber.placeholder = 'Введіть кількість ствопчиків';
tableCreateBlock.appendChild(inputTdNumber);

const inputTrNumber = document.createElement('input');
inputTrNumber.setAttribute('type', 'text');
inputTrNumber.placeholder = 'Введіть кількість стрічок';
tableCreateBlock.appendChild(inputTrNumber);

const buttonCreateTable = document.createElement('button');
buttonCreateTable.innerHTML = 'Генерувати таблицю';
tableCreateBlock.appendChild(buttonCreateTable);

buttonCreateTable.addEventListener('click', () => createTable());

function createTable() {
    const mainTable = document.createElement('table');
    tableBlock.appendChild(mainTable);

    const inversionButton = document.createElement('button');
    inversionButton.innerHTML = 'Змінити кольори';
    tableBlock.appendChild(inversionButton);

    function createTd() {
        const td = document.createElement('td');

        return td;
    }

    function createTr() {
        const tr = document.createElement('tr');

        return tr;
    }

    for (let i = 0; i < inputTrNumber.value; i++) {
        mainTable.appendChild(createTr());

        for (let j = 0; j < inputTdNumber.value; j++) {
            mainTable.children[i].appendChild(createTd())
        }
    }

    mainTable.addEventListener('click', e => {
        if (e.target.style.backgroundColor === 'black') {
            e.target.style.backgroundColor = 'white';
        } else {
            e.target.style.backgroundColor = 'black';
        }
    });

    inversionButton.addEventListener('click', () => {
        for (let i = 0; i < inputTrNumber.value; i++) {
            for (let j = 0; j < inputTdNumber.value; j++) {
                if (mainTable.children[i].children[j].style.backgroundColor === 'white') {
                    mainTable.children[i].children[j].style.backgroundColor = 'black';
                }
                else {
                    mainTable.children[i].children[j].style.backgroundColor = 'white';
                }
            }
        }
    });
}
