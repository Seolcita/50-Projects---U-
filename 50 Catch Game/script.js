/** @format */

const screens = document.querySelectorAll('.screen');
const choose_friend_btns = document.querySelectorAll('.choose-friend-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.querySelector('.game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');
const endMessage = document.getElementById('end-message');
const again_btn = document.querySelector('.again-btn');

let seconds = 20;
let score = 0;
let selected_friend = {};

start_btn.addEventListener('click', () => screens[0].classList.add('move'));

choose_friend_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selected_friend = {
      src,
      alt,
    };
    // console.log('src alt', selected_friend.src, selected_friend.alt);
    screens[1].classList.add('move');
    setTimeout(createFriend, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(decreaseTime, 1000);
}

function decreaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;

  if (seconds === 0) {
    endMessage.classList.add('show');
    s = 0;
    m = 0;
    clearInterval(decreaseTime);
  } else {
    seconds--;
  }
}

function createFriend() {
  // console.log('created>>> ', selected_friend.src);
  const friend = document.createElement('div');
  friend.classList.add('friend');
  const { x, y } = getRandomLocation();
  friend.style.top = `${y}px`;
  friend.style.left = `${x}px`;
  friend.innerHTML = `<img src="${selected_friend.src}" alt="${
    selected_friend.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" class="friend-img"/>`;

  console.log(friend);
  // friend.addEventListener('click', () => console.log('clicked'));
  friend.addEventListener('click', catchFriend);

  game_container.appendChild(friend);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchFriend() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);
  addFriends();
}

function addFriends() {
  setTimeout(createFriend, 500);
  setTimeout(createFriend, 1000);
  setTimeout(createFriend, 1500);
}

function increaseScore() {
  score++;
  if (score > 14) {
    message.classList.add('visible');
  }
  if (score > 20) {
    message.classList.remove('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
}

again_btn.addEventListener('click', () => window.location.reload());
