let columns = []

const childContainer  = document.createElement('div');
childContainer.className = 'children-container';
childContainer.addEventListener('click', (event) => {
    if (event.target.tagName != 'SPAN') {
    } else {
        event.target.style.background = 'black';
    }
});

const container = document.createElement('div');

const nameInputTr = document.createElement('span');
nameInputTr.innerHTML = 'Кл-сть рядків: ';

const inputTr = document.createElement('input');
inputTr.setAttribute('type', 'number');
inputTr.setAttribute('class', 'num-tr');

const inputTd = document.createElement('input');
inputTd.setAttribute('class', 'num-tr');
inputTd.setAttribute('type', 'number');

const nameInputTd = document.createElement('span');
nameInputTd.innerHTML = 'Кл-сть стовпців: ';

const button = document.createElement('button');
button.innerHTML = 'OK';
button.addEventListener('click', () => {
    const tr = parseInt(inputTr.value);
    const td = parseInt(inputTd.value);
    columnRender(tr, td);
});

const changeColorBox = document.createElement('span');
changeColorBox.setAttribute('id', 'change-color');
changeColorBox.innerText = 'Протилежні кольори';

changeColorBox.addEventListener('click', (event) => {
    for (k=0; k < columns.length; k++) {
        if (columns[k].style.background === 'black') {
            columns[k].style.background = 'white'
        } else {
            columns[k].style.background = 'black'
        }
    }

});

container.setAttribute('class', 'last-child-container');
container.appendChild(nameInputTr);
container.appendChild(inputTr);
container.appendChild(nameInputTd);
container.appendChild(inputTd);
container.appendChild(button);
container.appendChild(changeColorBox);

const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'main-container');
mainContainer.appendChild(childContainer);
mainContainer.appendChild(container);
document.body.appendChild(mainContainer);

function columnRender(tr, td) {
    columns = [];
    childContainer.innerHTML = '';
    for (let i = 0; i < tr; i++) {
        const lineContainer = document.createElement('div');
        lineContainer.setAttribute('class', 'child-container');
        for (let j = 0; j < td; j++) {
            const box = document.createElement('span');
            box.setAttribute('class', 'box');
            box.style.width = 100 / td + '%';
            columns.push(box);
            lineContainer.appendChild(box);
        }
        childContainer.appendChild(lineContainer);
    }
}



