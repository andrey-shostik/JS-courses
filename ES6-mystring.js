class MyString {
    constructor(str) {
        this.myStr = str;
    }

    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        let myArray = str.split(' ');
        const n = myArray.length;

        for(let i = 0; i < n; i++) {
            myArray[i] = this.ucFirst(myArray[i]);
        }

        return myArray.join(' ');
    }
}

const newStr = new MyString();

console.log(newStr.reverse('abcde'));
console.log(newStr.ucFirst('abcde'));
console.log(newStr.ucWords('abcde adcde abbde'));