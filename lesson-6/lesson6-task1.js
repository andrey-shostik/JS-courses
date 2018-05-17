function sumArguments(value) {
    return secondValue => nextValue => value + secondValue + nextValue;
}

console.log("Task1:");
console.log(sumArguments(1)(2)(3) === 6);
console.log("");