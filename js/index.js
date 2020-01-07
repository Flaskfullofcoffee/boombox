const pressed = [];
const secretCode = 'zac';

window.addEventListener('keyup', (e) => {
  const key = e.key;
  pressed.push(key);
  console.log(pressed);
})
