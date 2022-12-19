const bar = document.getElementById('bar');
const menu = document.querySelector('.menu');
const cross = document.getElementById('cross');
const section = document.querySelector('section');
const nav = document.querySelector('nav');

bar.addEventListener('click', () => {
  menu.style.display = 'flex';
  menu.classList.toggle('animation');
});

console.log(cross);
cross.addEventListener('click', () => {
  menu.style.display = 'none';
});

section.addEventListener('click', () => {
  menu.style.display = 'none';
});
