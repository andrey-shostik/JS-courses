
function fibonacciArr(n) {
    const fib = [0, 1];

    if (n < fib.length) {
        fib.length = n;
    } else {
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
    }

    return fib.slice(0, n);
}