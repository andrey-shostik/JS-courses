// Задание 1: реализовать функцию которая вернет сумму элементов произвольного массива

const arr = [7, 5, 23, 11, 18, 1, 8, 3, 'text', undefined];

function getSumArray() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum += arr[i];
        } else {
            console.log(arr[i] + ' - is not a number');
        }
    }
    return sum;
}

console.log('Sum of the array: ' + getSumArray());