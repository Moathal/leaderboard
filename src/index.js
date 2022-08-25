import './style.css';

const gameAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PvvOdCYITi0IQGmsheYe/scores/';
const refresh = document.getElementById('refresh');
const name = document.getElementById('name');
const score = document.getElementById('score');
const submit = document.getElementById('submit');
const list = document.getElementById('list');

const getValue = async () => {
    const response = await fetch(gameAPI).then(res => res.json());
    return response.result;
};

const postValue = async () => {
     await fetch(gameAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: name.value,
            score: score.value
        })
    });
};

submit.addEventListener('click', () =>{
    postValue()
});

refresh.addEventListener('click', () => {
    console.log(getValue())
    list.innerText = '';
    results.forEach((player) => {
        let li = document.createElement('li');
        li.innerText = `${player.user}: ${player.score}`;
        list.appendChild(li);
    });
})