function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

delay(100).then(() => console.log("Hello!"));

const fetch = require('node-fetch');
const url = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const urlUsers = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

/*(function getUserDataProm(url, urlUsers) {
    fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            const {getUsersData} = json;
            if (getUsersData === true) {
                fetch(urlUsers, {method: 'GET'})
                    .then(res => res.json())
                    .then(json => console.log(json))
                    .catch(e => console.log(e))
            }
        });
})(url, urlUsers);

const getUserDataAsync = async (url, urlUsers) => {
    try {
     const {getUsersData} = await (await fetch(url, {method: 'GET'})).json();
        if (getUsersData === true) {
            console.log(await (await  fetch(urlUsers, {method: 'GET'})).json())
        }
    } catch (e) {
        console.log(e)
    }
};

getUserDataAsync(url, urlUsers);*/

const urls = [
        'http://www.json-generator.com/api/json/get/cevhxOsZnS',
        'http://www.json-generator.com/api/json/get/cguaPsRxAi',
        'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
        'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
        'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];


function getJsons(urls) {
    let result = [];
    for (let i = 0; i < urls.length; i++){
        fetch(urls[i], {method : 'GET'})
            .then(res => res.json())
            .then(json => result.push(json))
            //.then(json => console.log(json))
            .catch(e => console.log(e))
    }

    return result
}
console.log(getJsons(urls));