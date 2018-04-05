function fibonacci(n) { //Возвращает массив с числами фибоначчи, количество которых зависит от переданного значения при вызове функции

    let myArray = [];
    myArray[0] = 1;
    myArray[1] = 1;

    if (n <= 2)
        myArray.length = n;
    else {

        for (let i = 2; i < n; i++)
            myArray[i] = myArray[i-1] + myArray[i-2];

    }

    return myArray;

}

console.log(fibonacci(6));