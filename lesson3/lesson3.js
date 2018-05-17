function firstTask() {  //вирішення задачі №1 за допомогою циклу
    let arrayOfSum = [];
    let arrayOfRandomNumbers = [];

    for (let i=0; i<10; i++){
        arrayOfRandomNumbers[i] = Math.random();
    }

    for (let i = 0; i < arrayOfRandomNumbers.length; i++) {
        if (i===0) {
            arrayOfSum[i] = arrayOfRandomNumbers[i];
        } else {
            arrayOfSum[i] = arrayOfSum[i-1] + arrayOfRandomNumbers[i];
        }
    }
    console.log("Виконання завдання за допомогою циклу:");
    console.log("Масив радомних чисел:" + "     " + arrayOfRandomNumbers);
    console.log("Масив напів сум попереднього масиву:" + "     " + arrayOfSum);
}


function firstTaskReduce() {  //вирішення задачі №1 за допомогою reduce
    let arrayOfRandomNumbers = [];

    for (let i=0; i<10; i++){
        arrayOfRandomNumbers[i] = Math.random();
    }

    function getPartSum() {
        let arrayOfSum = [];
        let totalSum = arrayOfRandomNumbers.reduce(function (previousValue, currentItem) {
            arrayOfSum.push(previousValue);

            return previousValue + currentItem;
        });

        arrayOfSum.push(totalSum);
        return arrayOfSum;
    }
    console.log("Виконання завдання за допомогою reduce:");
    console.log("Масив радомних чисел:" + "     " + arrayOfRandomNumbers);
    console.log("Масив напів сум попереднього масиву:" + "     " + getPartSum(arrayOfRandomNumbers));
}


function getAvaragePrice(arrayOfCar) {      //виконання завдання №2
    let getArray = arrayOfCar.map(item => {
        let {id, name, firstPrice, secondPrice} = item;
        let avaragePrice = (firstPrice + secondPrice) / 2;
        return {id, name, avaragePrice};
    });
    return getArray;
}


function sortArrAvaragePrice(arrayOfCar) {      //виконання завдання №3
    let filterArrAvaragePrice = arrayOfCar.filter(function (a) {
        return a.avaragePrice > 5000
    });
    let sortFilterArrAvaragePrice = filterArrAvaragePrice.sort(function (a, b) {
        return a.avaragePrice - b.avaragePrice;
    });
    return sortFilterArrAvaragePrice;
}
