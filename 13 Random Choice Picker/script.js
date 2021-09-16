/** @format */

//Create Tags

const tagsDiv = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', (e) => {
  //console.log(e.target.value);
  createTag(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTag(input) {
  const tagArray = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsDiv.innerHTML = '';

  tagArray.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsDiv.appendChild(tagEl);
  });
}

function randomSelect() {
  //console.log('Enter key pressed');
  const times = 30;

  // Highlighting then unhighlighting random tag infinitly
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  // Stop highlighting and unhighlighting random tags
  // then select a random tag and highlight it
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}

/* Explanation

function createTag(input) {
  // input << one string which contains ','
  // ex >> ['Apple,Banana,Orange']

  // I need to split it. split words will be in an array.
  // const tagArray = input.split(',');
  //
  // console.log(tagArray);
  // In console >> ex >> ['Apple','Banana','Orange']

  // The empty Strings(words) need to be ignored.
  // Below code will find empty string and filter out from the array
  // const tagArray = input.split(',').filter((tag) => tag.trim() !== '');
  //
  // console.log(tagArray);
  // Input >> Apple, Bana na,,,Orange,,,Berry
  // In console >> ['Apple', 'Bana na', Orange, Berry]

  // To remove white space before and after the words, map it through and trim the space.
  // const tagArray = input
  //   .split(',')
  //   .filter((tag) => tag.trim() !== '')
  //   .map((tag) => tag.trim());
  //
  // console.log(tagArray);
  // Input >> Apple,   Bana na, Orange   ,Berry
  // In console >> ['Apple', 'Bana na', 'Orange', 'Berry']

  // const tagArray = input
  //   .split(',')
  //   .filter((tag) => tag.trim() !== '')
  //   .map((tag) => tag.trim());

  //tagsDiv.innerHTML = ''; // Clear Out any tags in class .tags

  // tagArray.forEach((tag) => {
  //   const tagEl = document.createElement('span'); // Create span tag
  //   tagEl.classList.add('tag'); // Add class .tag to span tag
  //   tagEl.innerText = tag; // Insert 'tag'(input) as tag's inner text
  //   tagsDiv.appendChild(tagEl); // Add the tag just created to its parent's tag(.tags)
  // });
}
*/
