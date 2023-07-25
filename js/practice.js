'use strict';
console.log('practice.js file was loaded');

// state
let mainUsersArrr = [];

function get5Users(howMany) {
  console.log('get5Users fn ran', howMany);
  fetch('https://dummyjson.com/users?limit=5')
    .then((resp) => resp.json())
    .then((atsInJs) => {
      // atsInJs - objektas
      console.log('atsInJs ===', atsInJs);
      const users = atsInJs.users;
      // mainUsersArrr = atsInJs.users.slice(0, 5);
      // mainUsersArrr = atsInJs.users.filter((uObj) => uObj.id < 6);
      mainUsersArrr = atsInJs.users;
      // const { users, limit } = atsInJs;
      console.log('mainUsersArrr ===', mainUsersArrr);
    })
    .catch(console.warn);
}
get5Users(5);

console.log('mainUsersArrr ===', mainUsersArrr);
