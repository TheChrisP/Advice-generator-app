'use strict';

// const submit = document.getElementById('submit');
const randomBtn = document.getElementById('random-btn');
const quote = document.getElementById('quote');
const adviceNumber = document.getElementById('advice-number');

function getRandomAdvice(e) {
  e.preventDefault();

  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((data) => {
      adviceNumber.innerHTML = `Advice #${data.slip.id}`;
      quote.innerHTML = `${data.slip.advice}`;
    });
}

randomBtn.addEventListener('click', getRandomAdvice);
