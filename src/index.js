import './style.css';

const gameAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PvvOdCYITi0IQGmsheYe/scores/';
const refresh = document.getElementById('refresh');
const name = document.getElementById('name');
const score = document.getElementById('score');
const submit = document.getElementById('submit');
const list = document.getElementById('list');

const getValue = async () => {
  const response = await fetch(gameAPI).then((res) => res.json());
  return response.result;
};

const postValue = async () => {
  await fetch(gameAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
  });
};

const reload = async () => {
  const results = await getValue();
  list.innerText = '';
  results.forEach((player, i) => {
    const li = document.createElement('li');
    if (i % 2 === 0) li.style.backgroundColor = 'lightgray';
    li.innerHTML = `<p>${player.user}</p><p> : </p><p>${player.score}</p>`;
    list.appendChild(li);
  });
};

reload();

refresh.addEventListener('click', () => {
  reload();
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  postValue();
  name.value = '';
  score.value = '';
});