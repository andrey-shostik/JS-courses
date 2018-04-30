function MyStringConstructor() {
    this.reverse = function (str) {
        if (!str) return str;
        return str.split("").reverse().join("");
    };

    this.ucFirst = function (str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    };

    this.ucWords = function (str) {
        if (!str) return str;
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
}

const MyString = new MyStringConstructor();

console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'