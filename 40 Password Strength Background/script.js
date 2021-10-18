/** @format */

const pw = document.getElementById('password');
const bg = document.getElementById('background');

pw.addEventListener('input', (e) => {
  let password = e.target.value;
  let length = password.length;
  let blurPx = 20 - length * 2;
  console.log(20 - length * 2);

  bg.style.filter = `blur(${blurPx}px)`;
});
