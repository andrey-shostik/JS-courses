function getTr() {
    let tr = document.getElementById('input-tr');
    return tr.value <= 10 ? tr.value : alert('max value 10');
}

function getTd() {
    let td = document.getElementById('input-td');
    return td.value <= 10 ? td.value : alert('max value 10');
}

function createTr() {
    let oneTr = document.createElement('tr');
    oneTr.className = 'tr';
    return oneTr
}

function createTd() {
    let oneTd = document.createElement('td');
    oneTd.className = 'td';
    return oneTd
}

let generate = document.getElementById('generate');
generate.addEventListener('click', function (e) {
    e.preventDefault();

    let table = document.createElement('table');
    table.className = 'table';

    table.addEventListener('click', function (event) {
        if (event.target.nodeName === 'TD') {
            if (event.target.className === 'td') {
                event.target.className = 'black'
            } else {
                event.target.className = 'td'
            }
        }
    });

    for (let i = 0; i < getTr(); i++) {
        table.appendChild(createTr());
        for (let j = 0; j < getTd(); j++) {
            table.children[i].appendChild(createTd())
        }
    }

    let wrapTable = document.createElement('div');
    wrapTable.className = 'wraptable';
    document.body.insertBefore(wrapTable, document.body.children[1]);
    wrapTable.appendChild(table)

});

let inversion = document.getElementById('change-color');
document.body.appendChild(inversion);

inversion.addEventListener('click', function (ev) {
    ev.preventDefault();
    let table = document.getElementsByTagName('td');
    console.log(table);

    for (let i = 0; i < getTr() * getTd(); i++) {
        if (table[i].className === 'td') {
            table[i].className = 'black'
        } else {
            table[i].className = 'td'
        }
    }
});
