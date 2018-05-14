//3
function makeCounter() {
    let counterValue = 1;

    function counter() {
        return counterValue++;
    }

    counter.set = function(value) {
        return counterValue = value;
    };

    counter.reset = function() {
        return counterValue = 1;
    };
    return counter;
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter.set(7));
console.log(counter.reset());
console.log(counter());