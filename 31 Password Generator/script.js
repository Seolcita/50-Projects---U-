/** @format */

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate Password and display
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  //console.log(length);

  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  //console.log(hasLower, hasUpper, hasNumber, hasSymbol);

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Clipboard
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';

  // Count how many check boxes marked
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount);

  //const typesArray = [{ lower }, { upper }, { number }, { symbol }];
  //console.log(Object.values({ lower })[0]);
  //console.log(Object.values({ upper })[0]);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  console.log(typesArr);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
  //return generatedPassword; << I can't use this.
  // Because 'i' is increased 'typesCount' each iteration so it is different from user's input(length)
  // That's why I have to create new variable and slice it as above code
}

// Alphabet has 26 characters
// In ASCHII chart, lowercase starts from 97
// Random number will be generated from 97 to 122
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Alphabet has 26 characters
// In ASCHII chart, uppercase starts from 65
// Random number will be generated from 65 to 90
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Number 0 ~ 9
// In ASCHII chart, number starts from 48
// Random number will be generated from 48 to 57
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Characters in a String are indexed from left to right
// ex) symbols[0] returns '!'
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//------ ASCII Character Codes Table ----------
// https://www.petefreitag.com/cheatsheets/ascii-codes/
