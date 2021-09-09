/** @format */

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  // I want to trigger it when scroll is almost the end of the screen (4/5)
  // console.log((window.innerHeight / 5) * 4);
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // Get location of the element's top
    const boxTop = box.getBoundingClientRect().top;

    // If box' top location is lower than triggerBottom's location
    // The box will show up. Otherwise the box will be disappeared
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
