class MyStringES6{
    static reverse(string) {
        return string.split('').reverse().join('');
    };

    static ucFirst (string) {
        return string[0].toUpperCase() + string.slice(1);
    };

    static ucWords(string) {
        let newString = '';

        for (let i = 0; i < string.length; i++) {
            newString += i && string[i - 1] !== ' ' ? string[i] : string[i].toUpperCase();
        }

        return newString;
    }
}

    console.log("Task4 ES6:");
    console.log(MyStringES6.reverse('abcde'));
    console.log(MyStringES6.ucFirst('abcde'));
    console.log(MyStringES6.ucWords('abcde abcde abcde'));
    console.log(" ");
