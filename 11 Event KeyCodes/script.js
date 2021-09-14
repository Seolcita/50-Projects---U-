/** @format */

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class="key">
  ${e.key === ' ' ? 'Space' : e.key}
  <small>event.key</small>
</div>
<div class="key">
${e.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
${e.code}  
  <small>event.code</small>
</div>`;
});

// Event is 'keydown' - press keyboard
// We can check many properties belong to the KeyboardEvent(e)
// such as key, keyCode, code.

// window.addEventListener('keydown', (e) => {
//   console.log(e);
// });
