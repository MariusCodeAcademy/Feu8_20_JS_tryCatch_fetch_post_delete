'use strict';
console.log('single-post.js file was loaded');

const els = {
  title: document.getElementById('title'),
  body: document.getElementById('body'),
  tags: document.getElementById('tags'),
};
console.log('els  ===', els);

// paimti url parametro pavadinimu postId reiksme
const params = new URLSearchParams(window.location.search);
const currentPostId = params.get('postId');
// ir ja isspausdinti
console.log('currentPostId ===', currentPostId);

// parsiusti konkretu posta paga id
fetch(`https://dummyjson.com/posts/${currentPostId}`)
  .then((resp) => resp.json())
  .then((currentPost) => {
    console.log('currentPost ===', currentPost);
    postObjToHtml(currentPost);
  })
  .catch((error) => console.warn(error));

//'https://dummyjson.com/posts/1'

function postObjToHtml(pObj) {
  // irasyti i h1 title it objekto
  els.title.textContent = pObj.title;
  // perrasom paragrafa
  els.body.textContent = pObj.body;
  // sugeneruoti tagus
  // ['magical', 'history', 'french']
  /* 
    <li class="column">tag1</li>
    <li class="column">tag1</li>
    <li class="column">tag1</li>
  */
  const tagsLiArr = tagsToEls(pObj.tags);
  console.log('tagsLiArr ===', tagsLiArr);
  els.tags.innerHTML = '';
  // tagsLiArr.forEach((liEl) => els.tags.append(liEl));
  els.tags.append(...tagsLiArr);
}

// ['magical', 'history', 'french']
function tagsToEls(tagsStringArr) {
  const elArr = tagsStringArr.map((tagString) => {
    const liEl = document.createElement('li');
    liEl.textContent = tagString;
    liEl.className = 'column';
    // console.log('liEl ===', liEl);
    return liEl;
  });
  // console.log('elArr ===', elArr);
  return elArr;
}
// tagsToEls(['magical', 'history', 'french']);
