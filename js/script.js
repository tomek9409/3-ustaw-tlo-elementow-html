console.log('Tło elementów');

const setBackground = () => {
  let p1 = document.querySelector('.first');
  let p2 = document.querySelector('.last');

  p1.classList.add('bg-red');
  p2.classList.add('bg-yellow');
  // p1.style.backgroundColor = 'red';
  // p2.style.backgroundColor = 'yellow';

};

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);
