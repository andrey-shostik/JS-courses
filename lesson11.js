//task1
function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => alert("Hello!"));

//task2
const urlToCheck = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const urlGetData = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

const getUrl = url => fetch(url)
    .then (body => body.json());

const getData = (urlToCheck, urlGetData) => getUrl(urlToCheck)
    .then (data => data.getUsersData)
    .then ( function(data){
        if(data === true) {
            getUrl(urlGetData)
                .then (result => console.log(result))
        } else {
            console.log ('request failed');
        }
    });

const getDataAsync = async (urlToCheck, urlGetData) =>
    (await getUrl(urlToCheck)).getUsersData ? console.log(await getUrl(urlGetData)) : console.error('request failed');

getData(urlToCheck, urlGetData);
getDataAsync(urlToCheck, urlGetData);

//task3
const sites = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

const data = [];

const getSite = url => fetch(url)
    .then (body => body.json());

const getDataConsistently = () => {
    for (let i = 0; i < sites.length; i++) {
        getSite(sites[i])
            .then(response => data.push(response));
    }
    console.log(data);
};

const getDataParallel = () => {
    Promise.all(sites.map(getSite))
        .then(result => console.log(result));
};

getDataConsistently(sites);
getDataParallel(sites);