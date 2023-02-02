const ul = document.querySelector('.box-items'),
  boxLength = 400;
  
for (let i = 0; i < boxLength; i++) {
  const li = document.createElement('li');
  li.classList.add('box');
  ul.appendChild(li);
}

const box = document.querySelectorAll('.box');
box.forEach(el => {
  el.addEventListener('mouseover',()=> {
    console.log(`#${(Math.random()).toString(16).substr(-6)}`);
    el.style.background = `#${(Math.random()).toString(16).substr(-6)}`;
  });
  el.addEventListener('mouseout',()=> {
      el.style.background = '';
  });
});



















