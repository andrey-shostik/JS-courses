class MyString {
    static reverse(myText){
        return (myText === '') ? '' : this.reverse(myText.substr(1)) + myText.charAt(0)
    }
    static ucFirst(myText){
        return (myText.charAt(0).toUpperCase() + myText.substr(1))
    }
    static ucWords(myText){
        return (myText === '') ? '' : myText.split(' ').map((myWord) => myWord.charAt(0).toUpperCase() + myWord.substr(1)).join(' ')
    }
}

console.log(MyString.reverse('abcde'))
console.log(MyString.ucFirst('abcde'))
console.log(MyString.ucWords('tut kakaya-to nadpis`'))