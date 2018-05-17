function createCounter() {
    valueOfCounter = 0;

    const counter = () => ++valueOfCounter;

    counter.set = (newCounterValue) => {
        valueOfCounter = --newCounterValue;
    }

    counter.reset = () =>{
        valueOfCounter = 0;
    }

    return counter;
}

const counter = createCounter();

console.log("Task3:");
console.log(counter());// 1
console.log(counter());// 2
counter.set(12);
console.log(counter()); // 12
counter.reset();
console.log(counter());// 1
