const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

delay(100).then(() => console.log("Hello!"));