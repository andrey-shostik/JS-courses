function sumArguments(value) {
    const totalSum = nextValue => sumArguments(value + nextValue);
    totalSum.toString = () => value;
    return totalSum;
}

alert(sumArguments(1)(2)(3)(4)(5)(6));
