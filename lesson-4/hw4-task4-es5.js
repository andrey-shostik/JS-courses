function MyString (){
}

MyString.reverse = function (string) {
    return string.split('').reverse().join('');
};

MyString.ucFirst = function (string){
  return string[0].toUpperCase() + string.slice(1);
};

MyString.ucWords = function (string){
    var newString = '';

    for (var i = 0; i < string.length; i++) {
        newString += i && string[i - 1] !== ' ' ? string[i]  : string[i].toUpperCase();
    }

    return newString;
}

console.log("Task4 ES5:");
console.log(MyString.reverse('abcde'));
console.log(MyString.ucFirst('abcde'));
console.log(MyString.ucWords('abcde abcde abcde'));
console.log(" ");