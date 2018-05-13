class MyString {
    static reverse (string){
        return string.split('').reverse().join('');
    };
    static ucFirst(string) {
        return string[0].toUpperCase() + string.slice(1);
    };
    static ucWords(string) {
        return string.split(' ').map(function(item) {
            return item.charAt(0).toUpperCase() + item.slice(1);
        }).join(' ');
    }

}

console.log(MyString.reverse('123')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'