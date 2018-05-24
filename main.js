



function renderTable(quantityRow = 10, quantityCell = 10) {
        const table  = document.createElement('table');
        const button = document.createElement('button');

            for (let i = 0; i < quantityRow; i++) {
                const tr = table.insertRow(0);

                    for (let j = 0; j < quantityCell; j++) {
                        const td = tr.insertCell(0);

                        td.style.border = '1px solid #777';
                        td.style.width  = '25px';
                        td.style.height = '25px';
                    }
            }

        button.style.marginTop     = '10px';
        button.innerHTML           = 'Поменять цвета';
        table.style.borderCollapse = 'collapse';

            table.addEventListener('click', e => {
                    if (e.target.tagName === 'TD') applyColor(e.target);
                });

            button.addEventListener('click', () => {
                    const allTd = table.getElementsByTagName('td');

                        for (let i = 0; i < allTd.length; i++) {
                            applyColor(allTd[i]);
                        }
                });

            document.body.appendChild(table);
        document.body.appendChild(button);
    }

function applyColor(value) {
       if (value.className !== 'black') {
                value.style.background = 'black';
                value.className        = 'black';
            } else {
                value.style.background = 'white';
                value.className        = 'white';
            }
    }

renderTable();