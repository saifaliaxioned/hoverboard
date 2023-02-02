const ul = document.querySelector('.box-items'),
  letters = '0123456789ABCDEF',
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
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}




















