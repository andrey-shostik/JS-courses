function sum(a) {
    f.currentSum = a;

    function f(b) {
        f.currentSum += b;
        return f;
    }

    f.toString = function() {
        return f.currentSum.toString();
    };
    return f
}


alert(sum(0)(2)(3)(5)(6)(7));