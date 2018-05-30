function initial() {
    const inputTr = document.createElement('INPUT')
    inputTr.setAttribute('type', 'text')
    inputTr.innerHTML = 'tr'
    document.body.appendChild(inputTr)
    inputTr.id = 'inputTr'
    inputTr.style.placeholder = 'number of row'

    const inputTd = document.createElement('INPUT')
    inputTd.innerHTML = 'td'
    document.body.appendChild(inputTd)
    inputTd.id = 'inputTd'
    inputTd.setAttribute('type', 'text')
    inputTd.placeholder = 'number of column'
    inputTd.style.marginLeft = '5px'


    const button = document.createElement('BUTTON')
    document.body.appendChild(button)
    button.innerHTML = 'create table'
    button.id = 'createTableButton'
    inputTr.placeholder = 'number of row'
    button.style.marginLeft = '5px'

    button.onclick = createTable;
}
initial();
function createTable() {
    const testTable = document.createElement('TABLE')
    const numOfTr = document.getElementById('inputTr')
    const numOfTd = document.getElementById('inputTd')
    const rowNum = numOfTr.value
    const colNum = numOfTd.value
    const buttonChangeColor = document.createElement('BUTTON')
    buttonChangeColor.style.marginLeft = '5px'
    buttonChangeColor.innerHTML = 'change color'
    document.body.appendChild(buttonChangeColor)
    testTable.border = 'solid 1px grey'

    for (let i = 0; i < rowNum; i++){
        const tr = document.createElement('TR')
        testTable.appendChild(tr)
        for (let j = 0; j < colNum; j++){
            const td = document.createElement('TD')
            td.style.width = '28px'
            td.style.height = '28px'
            td.style.backgroundColor = 'white'
            tr.appendChild(td)
        }
    }

    testTable.addEventListener('click', e => {
        if(e.target.tagName === 'TD') changeColor(e.target)
    })
    buttonChangeColor.addEventListener('click', () =>{
        const allColors = testTable.getElementsByTagName('TD')
            for( let i = 0; i < allColors.length; i++){
                changeColor(allColors[i])
            }
    })
    document.body.appendChild(testTable)

}
const changeColor = (color) => {color.style.backgroundColor === 'white' ? color.style.backgroundColor = 'black' : color.style.backgroundColor = 'black' ||
    color.style.backgroundColor === 'black' ? color.style.backgroundColor = 'white' : color.style.backgroundColor = 'black'}

