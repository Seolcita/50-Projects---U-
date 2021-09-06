/** @format */

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  //console.log(currentActive);

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  //console.log(actives.length, circle.length);
  // To get percentage of progress bar
  // => console.log(actives.length / circle.length) * 100;
  // => 50%, 75%, 100% but it is not right.
  // Because it shouldn't contain first one.
  // That's why I did -1. See below.

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
