/** @format */

const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // Clicked x & y location from window
    const x = e.clientX;
    const y = e.clientY;

    // button's top(y) and left(x) location from window
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Absolute location from button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Add location for ripple effect(.circle) to the button
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    this.appendChild(circle);

    // Delete added span for ripple effect
    setTimeout(() => circle.remove(), 2500);

    /* Check the locations
    console.log(y, x); // 408, 144
    console.log(buttonTop, buttonLeft); //373, 126
    console.log(yInside, xInside); // 35, 18
    */
  });
});
