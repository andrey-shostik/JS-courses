function sumArguments (value){
    return nextValue => nextValue ? sumArguments(value + nextValue) : value;
}

console.log("Task2.1:");
console.log(sumArguments(1)(2)(3)(4)(5)() === 15);
console.log("");