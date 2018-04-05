function unical(myArray) { //Оставляет в массиве только уникальные элементы

    let newArray = [];

    let n = myArray.length;

    for (let i = 0; i < n; i++) {

        let flag = 0;

        for (let j = 0; j < newArray.length; j++) {

            if (myArray[i] == newArray[j])
                flag = 1;

        }

        if (flag == 0)
            newArray.push(myArray[i]);

    }

    return newArray;

}

let myArray = [1, 1, 2, 3, 1, 2];

console.log(unical(myArray));