class MyString {

    static reverse(str) {
        if (!str) return str;
        return str.split("").reverse().join("");
    }

    static ucFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    static ucWords(str) {
        if (!str) return str;
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
}


console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'