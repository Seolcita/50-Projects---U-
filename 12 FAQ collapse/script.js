/** @format */

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

// This code targets faq itself not button
// const faqs = document.querySelectorAll('.faq');
// const btns = document.querySelectorAll('.faq-toggle');

// faqs.forEach((faq) => {
//   faq.addEventListener('click', () => {
//     faq.classList.toggle('active');
//   });
// });
