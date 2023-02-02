const ul = document.querySelector('.box-items'),
  colorLetters = '0123456789ABCDEF',
  boxLength = 400;
  
for (let i = 0; i < boxLength; i++) {
  const li = document.createElement('li');
  li.classList.add('box');
  ul.appendChild(li);
}

const box = document.querySelectorAll('.box');
box.forEach(el => {
  el.addEventListener('mouseover',()=> {
    el.style.background = colorGenerator();
  });
  el.addEventListener('mouseout',()=> {
      el.style.background = '';
  });
});

const colorGenerator = ()=> {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += colorLetters[Math.floor(Math.random() * colorLetters.length)];
  }
  return color;
}




















