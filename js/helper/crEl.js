/* 
<ul id="tags" class="row">
  <li class="column">tag1</li>
  <li class="column">tag1</li>
  <li class="column">tag1</li>
</ul>
*/
function crEl(tagname, attrsObj = {}, text = '') {
  const newEl = document.createElement(tagname);
  for (key in attrsObj) {
    const value = attrsObj[key];
    newEl.setAttribute(key, value);
  }
  if (text !== '') newEl.textContent = text;
  return newEl;
}

const ulEl = crEl('ul', { id: 'tags', class: 'row' }, '');
const li1 = crEl('li', { class: 'column' }, 'tag1');
const li2 = crEl('li', { class: 'column' }, 'tag2');
const li3 = crEl('li', { class: 'column' }, 'tag3');
console.log('ulEl ===', ulEl);
console.log('li1 ===', li1);
// i ul ideti li?
ulEl.append(li1, li2, li3);

const divEl = crEl('div', { class: 'bordered' });

const randImg = crEl('img', {
  src: 'https://picsum.photos/200/300',
  alt: 'Random image of something',
  title: 'This is it',
});
divEl.append(randImg);

document.body.append(ulEl, divEl);
