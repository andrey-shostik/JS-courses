//Task-1.
const delay = ms => new Promise((resolve) => setTimeout(resolve, ms));

delay(1000).then(() => console.log("Hello!"));

//Task-2.
const url1 = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const url2 = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

fetch(url1)
    .then(response => response.json())
    .then(({getUsersData}) => getUsersData ? fetch(url2) : obj)
    .then(response => response.json())
    .then(arrObj => arrObj.forEach(item => console.log(item)));

// async-await...
const parseJson = url => fetch(url)
    .then(response => response.json());

async function getDataFromUrl(url1, url2) {
    (await parseJson(url1)).getUsersData ? (await parseJson(url2)).forEach(item => console.log(item)) : console.error("error");
}

getDataFromUrl(url1, url2);

//Task-3.
const urls = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

const loadDataOneByOne = urls => {
    const resultData = [];

    for (let i = 0; i < urls.length; i++) {
        fetch(urls[i])
            .then(response => response.json())
            .then(response => resultData.push(response));
    }
    console.log(resultData);
};

const parallelLoadData = urls => Promise.all(urls.map(url => fetch(url)
    .then(res => res.json())
    .then(obj => console.log(obj))));

loadDataOneByOne(urls);
parallelLoadData(urls);