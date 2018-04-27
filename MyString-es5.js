console.log("/////////////////////////////////////////// 4 ///////////////////////////////////////////////");
// 4. Реализуйте класс MyString, который будет иметь следующие методы: статический метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, статический метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и
// статический метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой
// строки.

// console.log(MyString.reverse('abcde')); //выведет 'edcba'
// console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
// console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'


function MyStringEs5() {
    this.reverse = function(string) {

        var totalSrting = "";
        for (var i = string.length - 1; i >= 0; i--) {
            totalSrting += string[i]
        }
        return totalSrting
    };

    this.ucFirst = function(string) {
        var char = string[0].toUpperCase();
        var partString = string.substring(1, string.length);
        string = char + partString;

        return string
    }

    this.ucWords = function(string) {

        var temp;
        var tempArr = [];
        var totalString;

        temp = string.split(" ");

        for (var i = 0; i < temp.length; i++) {
            tempArr.push(this.ucFirst(temp[i]))
        }

        totalString = tempArr.join(" ");

        return totalString
    }
}

var MyStringEs5 = new MyStringEs5();

console.log(MyStringEs5.reverse('abcde')); //выведет 'edcba'
console.log(MyStringEs5.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyStringEs5.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

