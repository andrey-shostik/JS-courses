//2
function sum(number){
    let result = number;
    function add(number){
        if(number === undefined) {
            result;
        } else {
            result += number
        }
        return add;
    }
    add.toString = function() {
        return result;
    }
    return add;
}
alert(sum(1)(2)()(4)());
