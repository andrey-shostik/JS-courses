const httpGet = url => fetch(url)
    .then(response => response.json());

const getDataMethodPromise = (url1, url2) => httpGet(url1)
    .then(({getUsersData}) => getUsersData ? httpGet(url2)
        .then(result => console.log(result)) : console.error('error'));

const getDataMethodAsyncAwait = async (url1, url2) =>
    (await httpGet(url1))['getUsersData'] ? console.log(await httpGet(url2)) : console.error('error');

getDataMethodPromise(url1, url2);
getDataMethodAsyncAwait(url1, url2);