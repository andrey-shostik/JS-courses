function summArray(myArray) { //Возвращает сумму элементов массива. Проверяет число это или нет.

    let summ = 0;

    let n = myArray.length;

    for (let i = 0; i < n; i++)
        if (typeof(myArray[i]) == "number")
            summ += myArray[i];

    return summ;

}

let myArray = [1, 2, 5, 'dsadsa', true, -4];

console.log(summArray(myArray));