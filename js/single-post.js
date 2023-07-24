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
  })
  .catch((error) => console.warn(error));

//'https://dummyjson.com/posts/1'
