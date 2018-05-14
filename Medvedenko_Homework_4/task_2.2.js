function sum(arg) {
    funcSum.currentSumArg = arg;

    function funcSum(nextArg) {
        funcSum.currentSumArg += nextArg;
        return funcSum;
    }

    funcSum.toString = function() {
        return funcSum.currentSumArg.toString();
    };
    return funcSum
}


alert(sum(0)(2)(3)(5)(6)(7));