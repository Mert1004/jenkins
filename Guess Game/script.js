'use strict';

const secretnumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
document.querySelector('.again').addEventListener('click',function(){
    location.reload();
})
document.querySelector('.btn.check').addEventListener
('click', function () {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretnumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.check').textContent = 'Resset'
        document.querySelector('.check').addEventListener ('click', function() {
        location.reload();
        })
        document.querySelector('.message').style.color = 'green';
    } else if (guess > secretnumber) {
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (guess < secretnumber) {
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }

    if (score === 0){
        document.querySelector('.message').textContent = 'Gameover';
        document.querySelector('.check').textContent = 'Resset'
        document.querySelector('.check').addEventListener ('click', function() {
        location.reload();
        })
        document.querySelector('.check').style.backgroundColor = 'red';
    }
})
