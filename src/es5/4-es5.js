function MyString() {
}

MyString.reverse = function (str) {
    return str.split('').reverse().join('');
};

MyString.ucFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

MyString.ucWords = function (str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        newStr += i && str[i - 1] !== ' ' ? str[i] : str[i].toUpperCase();
    }

    return newStr;
};

console.group('4');
console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
console.groupEnd('4');