/** @format */

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json()) // 받은 res를 res.json()을 사용해서 object/array/primitive등으로 전환
    // .then((data) => console.log(data)); // 전환 된 것이 data임. 콘솔 출력하면 밑에 처럼 joke object 나옴.
    // {id: 'pjyA59MRusc', joke: 'There’s a new type of broom out, it’s sweeping the nation.', status: 200}
    // .then((data) => (jokeEl.innerHTML = data)); >> data = joke Object 전체이기 때문에
    // 웹에서 [Object, object] 라고 출력 됨.
    // 내가 필요한 정보는 오직 joke의 value이기 때문에 data.joke가 되어야 함.
    .then((data) => (jokeEl.innerHTML = data.joke));
}

// USING ASYNC/AWAIT
/*
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke; //innerText works as well.
}
*/
