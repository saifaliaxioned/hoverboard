const ul = document.querySelector('.box-items'),
  arr = ['#9FD406', '#555D7B', '#C97D99', '#ff0000', '#79CAE5', '#ff6a00'],
  boxLength = 400;
  
for (let i = 0; i < boxLength; i++) {
  const li = document.createElement('li');
  li.classList.add('box');
  ul.appendChild(li);
}

const box = document.querySelectorAll('.box');
box.forEach(el => {
  el.addEventListener('mouseover',()=> {
    // let randomColor = Math.ceil(Math.random() * arr.length);
    let randomColor = Math.floor(Math.random() * arr.length);
    el.style.background = arr[randomColor];
  });
  el.addEventListener('mouseout',()=> {
      el.style.background = '';
  });
});





















