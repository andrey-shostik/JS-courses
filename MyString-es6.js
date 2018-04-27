console.log("/////////////////////////////////////////// 4 ///////////////////////////////////////////////");
// 4. Реализуйте класс MyString, который будет иметь следующие методы: статический метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, статический метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и
// статический метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой
// строки.

// console.log(MyString.reverse('abcde')); //выведет 'edcba'
// console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
// console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

class MyString {

    reverse(string) {

        let totalSrting = "";
        for (let i = string.length - 1; i >= 0; i--) {
            totalSrting += string[i]
        }
        return totalSrting
    }

    ucFirst(string) {
        let char = string[0].toUpperCase();
        let partString = string.substring(1, string.length);
        string = char + partString;

        return string
    }

    ucWords(string) {

        let temp;
        let tempArr = [];
        let totalString;

        temp = string.split(" ");

        for (let i = 0; i < temp.length; i++) {
            tempArr.push(this.ucFirst(temp[i]))
        }

        totalString = tempArr.join(" ");

        return totalString
    }
}

let MyStringS = new MyString();

console.log(MyStringS.reverse('abcde')); //выведет 'edcba'
console.log(MyStringS.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyStringS.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

