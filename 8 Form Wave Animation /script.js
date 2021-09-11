/** @format */

const labels = document.querySelectorAll('.form-control label');

// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split('')
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     )
//     .join('');
// });

//console.log(labels);
//In console >> NodeList(2) [label, label] // Eamil, Password

labels.forEach((label) => {
  const letter = label.innerText.split('');
  console.log(letter);

  // In console >> ['E','m','a','i','l'] ['P','a','s','s','w','o','r','d']
  // Splited letters are in array called 'letter'

  label.innerHTML = label.innerText.split('').map((letter) => {
    `<span>${letter}</span>`;
  });
  console.log(label.innerHTML);
  // In console >> [undefiend,undefiend,undefiend,undefiend,undefiend] ??? // for Email
  // I don't use array for innerHTML. It has to be String. That's why we are using .join()

  // label.innerHTML = label.innerText
  //   .split('')
  //   .map((letter, index) => {
  //     `<span>${letter}</span>`;
  //   })
  //   .join('');
  // console.log(label.innerHTML);
});
