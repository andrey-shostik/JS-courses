function MyString() {

    this.reverse = function helpReverse(myText) {
        return (myText === '') ? '' : helpReverse(myText.substr(1)) + myText.charAt(0)
    }
    this.ucFirst = function (myText) {
        return (myText === '') ? '' : myText.charAt(0).toUpperCase() + myText.substr(1)
    }
    this.ucWords = function (myText) {
        return (myText === '') ? '' : myText.split(' ').map((myWord) => myWord.charAt(0).toUpperCase() + myWord.substr(1)).join(' ')
    }
}
let myString = new MyString()
console.log(myString.reverse('abcde'))
console.log(myString.ucFirst('abcde'))
console.log(myString.ucWords('tut kakaya-to nadpis`'))