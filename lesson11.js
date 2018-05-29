// 1. Написать функцию delay(ms), которая возвращает промис, переходящий в состояние
// "resolved" через ms миллисекунд. Пример: delay(1000).then(() => alert("Hello!"))

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(true)
    }, ms)
  });
}

delay(3000).then(() => alert("Hello!"));

// 2. Написать функцию в которой будет запрос на
// http://www.json-generator.com/api/json/get/cfQCylRjuG, из ответа приходит поле getUsersData,
// если значение равно true то надо получить и вывести в консоль данные из
// http://www.json-generator.com/api/json/get/cfVGucaXPC, должно быть два варианта этой функции,
// с использованием промисов и с использованием async/await

fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
  .then(function (response) {
    return response.json()
  })
  .then(function (value) {
    if (value.getUsersData) {
      return fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
        .then(function (value) {
          return value.json()
        })
        .then(function (arr) {
          let arrLenght = arr.length;
          for (let i = 0; i < arrLenght; i++) {
            console.log(arr[i])

          }
        })
    }
  });

// 3. Написать функцию в которой надо будет получить данные из следующих страниц:
// http://www.json-generator.com/api/json/get/cevhxOsZnS
// http://www.json-generator.com/api/json/get/cguaPsRxAi
// http://www.json-generator.com/api/json/get/cfDZdmxnDm
// http://www.json-generator.com/api/json/get/cfkrfOjrfS
// http://www.json-generator.com/api/json/get/ceQMMKpidK
// Когда все данные будут загружены надо вывести в консоль массив с этими данными, должно
// быть два варианта этой функции, первый вариант с параллельной загрузкой, второй с
// последовательной.

let p1 = getFetchData('http://www.json-generator.com/api/json/get/cevhxOsZnS');
let p2 = getFetchData('http://www.json-generator.com/api/json/get/cguaPsRxAi');
let p3 = getFetchData('http://www.json-generator.com/api/json/get/cfDZdmxnDm');
let p4 = getFetchData('http://www.json-generator.com/api/json/get/cfkrfOjrfS');
let p5 = getFetchData('http://www.json-generator.com/api/json/get/ceQMMKpidK');

function getFetchData(linkFetch) {
  return fetch(linkFetch)
    .then(function (response) {
      return response.json()
    })
}

Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
});


