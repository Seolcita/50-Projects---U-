/** @format */

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

console.log(loadText);

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  //console.log(load);

  loadText.innerText = `${load}%`;

  // Mapping 0 to 100 with 1 to 0
  // It will lead text opacity 1 to 0 while 'load' counts 0 to 100
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  // Mapping 0 to 100 with 30 to 0
  // It will lead background filter(blur) 30 to 0 while 'load' counts 0 to 100
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Mapping a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// Reference for scale()
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
