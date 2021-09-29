/** @format */

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  //console.log(this);
  this.className += ' hold';

  // To change class name '.fill .hold' to '.invisible'
  //   >> Remove background image in .fill div
  // To give some time to drag the image, use setTimeout
  // If I don't use setTimeout the image will be invisible as soon as I click the image
  setTimeout(() => (this.className = 'invisible'));

  //console.log('drag start');
}

function dragEnd() {
  this.className = 'fill';
  //console.log('drag end');
}

function dragOver(e) {
  e.preventDefault();
  //console.log('drag over');
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
  //console.log('drag enter');
}

function dragLeave() {
  this.className = 'empty';
  //console.log('drag leave');
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
  console.log('drag drop');
}
