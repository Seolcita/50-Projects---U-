/** @format */

const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('');
});

// DETAIL EXPLANATION --------------------------------------------------------------------------

//console.log(labels);
//In console >> NodeList(2) [label, label] // Eamil, Password

// labels.forEach((label) => {
//const letter = label.innerText.split('');
//console.log(letter);
// In console >> ['E','m','a','i','l'] ['P','a','s','s','w','o','r','d']
// Split letters are in array called 'letter'

// let letterMap = label.innerText
//   .split('')
//   .map((letter) => `<span>${letter}</span>`);
// console.log(letterMap);
// In console >> [<span>E</span>,<span>m</span>,<span>a</span>,<span>i</span>,<span>l</span>] // for Email
// I don't use array for innerHTML. It has to be String. That's why I am using .join()

// label.innerHTML = label.innerText
//   .split('')
//   .map((letter, index) => `<span>${letter}</span>`)
//   .join('');
// console.log(label.innerHTML);
// I can see <span> is added each letter in html file
// <label>
//   <span>E</span>
//   <span>m</span>
//   <span>a</span>
//   <span>i</span>
//   <span>l</span>
// </label>

// });
