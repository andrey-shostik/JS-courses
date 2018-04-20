function summPartsArray(myArray) {
    let newArray = [];

    myArray.reduce(function(summ, current) {
        newArray.push(summ);
        return summ + current;
    });

    return newArray;
}

const myArray = [1, 2, 3, 4, 5, 6];

console.log(summPartsArray(myArray));