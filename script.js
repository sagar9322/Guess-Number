let number = Math.trunc(Math.random() * 20 + 1);
var score = 20;
let highscore = 0;
let message = document.querySelector('.message');
let num = document.querySelector('.number');
let scr = document.querySelector('.score');
let modalH1 = document.querySelector('.modal h1');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

// function call when check button will click
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // when there is no value in input
    if (!guess) {
        message.textContent = '⛔ Please Enter Valid Number';
    }

    // when guess equal to number
    else if (guess === number) {
        message.textContent = '🎉You Won🎉';
        document.body.style.backgroundColor = '#60b347';
        num.style.width = '30rem';
        num.textContent = number;
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        if (highscore < score) {
            highscore = score;
        }
    }

    // when guess is not equal to number
    else if (guess !== number) {
        if (guess < number && score > 1) {
            message.textContent = 'Number is too 👎Low';
            score--;
        } else if (guess > number && score > 1) {
            message.textContent = 'Number is too 👍High';
            score--;
        } else {
            message.textContent = '💥Game Over💥';
            document.body.style.backgroundColor = 'red';
            score = 0;
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
            modalH1.textContent = '💥Game Over💥';
            modalH1.style.fontSize = '3em';
            modalH1.style.color = 'red';
            document.querySelector('.highscore-display').textContent = highscore;
        }

    }


    document.querySelector('.highscore-display').textContent = highscore;
    scr.textContent = score;
    document.querySelector('.highscore').textContent = highscore;
});


// when again button will click.
document.querySelector('.again').addEventListener('click', function () {
    message.textContent = 'Start guessing...';
    score = 20;
    scr.textContent = score;
    document.body.style.backgroundColor = '#222';
    num.textContent = '?';
    number = Math.trunc(Math.random() * 20 + 1);
    num.style.width = '15rem';
    document.querySelector('.guess').value = "";
})

// when click on "X" in hidden display
document.querySelector('.close-modal').addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})