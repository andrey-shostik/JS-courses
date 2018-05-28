function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

delay(100).then(() => console.log("Hello!"));


const fetch = require('node-fetch');
const url = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const urlUsers = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

function getUserData() {
    fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then(function (json) {
            if (json.getUsersData) {
                fetch(urlUsers, {method: 'GET'})
                    .then(res => res.json())
                    .then(json => console.log(json))
            }
        });
}

getUserData();

function getUsreDataAsync() {
    
}