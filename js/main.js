const sum = (collection) => {
    let sum = 0;

    for (let index in collection) {
        sum += collection[index];
    }

    return sum;
};

const bubbleSort = (collection) => {
    for (let outerIndex = 0; outerIndex < collection.length; outerIndex++) {
        for (let innerIndex = 0; innerIndex < collection.length - 1; innerIndex++) {
            if (collection[innerIndex] > collection[innerIndex + 1]) {
                let current = collection[innerIndex];
                collection[innerIndex] = collection[innerIndex + 1];
                collection[innerIndex + 1] = current
            }
        }
    }
    return collection;
};

const unique = (collection) => {
    let uniqueCollection = [];

    for (let index in collection) {
        if (uniqueCollection.indexOf(collection[index]) < 0) {
            uniqueCollection.push(collection[index]);
        }
    }

    return uniqueCollection;
};

const uniqueBySet = (collection) => {
    return Array.from(new Set(collection));
};

const fibonacci = (count, arrayCount) => {
    let a = 1,
        b = 1,
        resultArray = [];

    for (let i = 3; i <= count; i++) {
        let c = a + b;
        a = b;
        b = c;
        resultArray.push(b)
    }
    resultArray.length = arrayCount;

    return resultArray;
};

const array = [5, 3, 6, 2, 2, 3, 5, 4];



console.log("sum of array elements: ");
console.log(sum(array));

console.log("sorted array:");
console.log(bubbleSort(array));
console.log(array.sort());

console.log("unique array");
console.log(unique(array));
console.log(uniqueBySet(array));

console.log("fibonacci array");
console.log(fibonacci(77, 12));
