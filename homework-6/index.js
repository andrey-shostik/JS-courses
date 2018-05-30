// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }
// delay(300).then(() => alert('Hello world!'))

const accessUrl = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const getDataUrl = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

const getUsersInfo = url => fetch(url)
    .then ( body => body.json() )

const getData = (accessUrl, getDataUrl) => getUsersInfo(accessUrl)
    .then ( data => data.getUsersData )
    .then ( (data) => ( data === true ) ? getUsersInfo(getDataUrl).then(result => console.log(result)) : console.log('request error') )

const getDataAsync = async (accessUrl, getDataUrl) =>
    (await getUsersInfo(accessUrl)).getUsersData ? console.log(await getUsersInfo(getDataUrl)) : console.log('request error')

getData(accessUrl, getDataUrl)
getDataAsync(accessUrl, getDataUrl)

const arrayOfData = [];
const pagesList = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
]

const getPage = url => fetch(url)
    .then (body => body.json())

const getDataListAlternatively = () => {
    for (let i = 0; i < pagesList.length; i++){
        getPage(pagesList[i])
            .then( response => arrayOfData.push(response))
    }
    console.log(arrayOfData)
}

const getDataListInParallel = () => {
    Promise.all(pagesList.map(getPage))
        .then(result => console.log(result))
}

getDataListAlternatively(pagesList)
getDataListInParallel(pagesList)