/* Звдание 4: реализовать функцию которая возвращает массив с числами фибоначчи,
количество которых зависит от переданного значения при вызове функции
*/

function getFibonacci(quantity) {
    let fibonacci = [1, 1];
    for (let i = 2; i < quantity; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2];
    }
    return fibonacci;
}

console.log('Fibonacci numbers: ' + getFibonacci(quantity));