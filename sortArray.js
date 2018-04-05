function sortArray1(myArray) { //Сортировка массива методом sort

    return myArray.sort();

}

function sortArray2(myArray) { //Сортировка массива пузырьком

    const n = myArray.length;

    let temp;

    for (let i = 0; i < n; i++) {

        for (let j = i+1; j < n; j++) {

            if (myArray[i] > myArray[j]) {

                temp = myArray[i];
                myArray[i] = myArray[j];
                myArray[j] = temp;

            }

        }

    }

    return myArray;
}


let myArray = [1, 3, 2, 'fsdf', 0, -5];

console.log(sortArray1(myArray));
console.log(sortArray2(myArray));