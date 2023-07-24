'use strict';
console.log('dummyJson.js file was loaded');

// pariusti ir isknosolinti tik postus
// https://dummyjson.com/posts

const urlPosts = 'https://dummyjson.com/posts?limit=10';
// https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId
fetch(urlPosts)
  .then((resp) => resp.json())
  .then((dataInJs) => {
    console.log('dataInJs ===', dataInJs);
    const postsArr = dataInJs.posts;
    console.log('postsArr ===', postsArr);
  })
  .catch((error) => console.warn(error));
