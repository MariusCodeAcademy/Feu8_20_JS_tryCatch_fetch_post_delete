'use strict';
console.log('dummyJson.js file was loaded');

const appEl = document.getElementById('app');
if (appEl === null) {
  throw 'Nera app el htmle';
}

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
    // console.log(JSON.stringify(postsArr[0], null, 2));
    makePostLiEl(postsArr, appEl);
  })
  .catch((error) => console.warn(error));

/**
 *
 * @param {Array} arr
 * @param {HTMLElement} destHtmlEl
 */
function makePostLiEl(arr, destHtmlEl) {
  destHtmlEl.innerHTML = '';
  arr
    .map((postObj) => {
      // is js objektu padarom html elementus
      const liEl = document.createElement('li');
      const aEl = document.createElement('a');
      // adding url parameter after "?"
      aEl.href = `single-post.html?postId=${postObj.id}`;
      aEl.textContent = postObj.id + ' (id) ' + postObj.title;
      liEl.append(aEl);
      console.log('liEl ===', liEl);
      return liEl;
    })
    .forEach((htmlEl) => {
      // html elementus sudedam i dom
      destHtmlEl.append(htmlEl);
    });
}
