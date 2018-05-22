function makeRequestsConsistently(urls) {
    const results = [];
    let chain = Promise.resolve();

    urls.forEach(url => chain = chain
        .then(() => httpGet(url))
        .then(result => results.push(result))
    );

    chain.then(() => console.log(results));
}

async function makeRequestsConsistently2(urls) {
    const result = [];

    for (let i = 0; i < urls.length; i++) await httpGet(urls[i])
        .then(response => result.push(response));

    console.log(result);
}

const makeRequestsParallel = urls => Promise.all(urls.map(httpGet))
    .then(result => console.log(result));

makeRequestsConsistently(urls);
makeRequestsConsistently2(urls);
makeRequestsParallel(urls);

