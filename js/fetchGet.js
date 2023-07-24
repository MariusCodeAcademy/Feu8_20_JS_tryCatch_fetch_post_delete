'use strict';
console.log('fetchGet.js file was loaded');

const urlTodos = 'https://jsonplaceholder.typicode.com/todos';

let todosFirst15 = [];
console.time('bendraEiga');
console.time('gryzoFetch');

const kaGrazinoFetch = fetch(urlTodos)
  .then((resp) => resp.json())
  .then((todosArr) => {
    // console.log('gavom todosArr ===', todosArr);
    todosFirst15 = todosArr.filter((todoObj) => todoObj.id <= 15);
    console.timeEnd('gryzoFetch');
    console.log('todosFirst15 inside fetch ===', todosFirst15);
    // return todosFirst15;
  })
  .catch((error) => console.warn(error));
// kaGrazinoFetch.then((kasGryzo) => console.log('kasGryzo', kasGryzo));
console.timeEnd('bendraEiga');
console.log('todosFirst15 ===', todosFirst15);
