//2
function sum(a){
    let res = a;
    function add(b){
        if(b === undefined) {
            res;
        } else {
            res +=b
        }
        return add;
    }
    add.toString = function() {
        return res;
    }
    return add;
}
alert(sum(1)(2)()(4)());
