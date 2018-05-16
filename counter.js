function makeCounter() {
    let myCounter = 1;

    function counter() {
        return myCounter++;
    }

    counter.set = function(value) {
        myCounter = value;
    }

    counter.reset = function() {
        myCounter = 1;
    }

    return counter;
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
counter.set(12);
console.log(counter()); // 12
counter.reset();
console.log(counter()); // 1