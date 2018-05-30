//Задача 1

function sum(value) {
    let result = (nextValue) => {
        value += nextValue;
        return result;
    };
    result.toString = () => value;
    return result;
}

console.log( sum(1)(2)(3) );

//Задача 2

function summ(value) {
    return nextValue => nextValue ? summ(value +nextValue) : value;
}

console.log( summ(1)(2)(3)(4)(5)(6)());