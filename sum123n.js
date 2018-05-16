//Задача 1 и 2
//Подходит для любого количества аргументов. С пустым вызовом в конце или без пустого.

function sum(x) {
    var mySum = x;

    function getNewSum(y) {
        if(arguments.length === 0) {
            return mySum;
        }

        mySum += y;
        return getNewSum;
    }

    getNewSum.toString = function() {
        return mySum;
    }

    return getNewSum;
}

alert(sum(1)(2)(3)(5));