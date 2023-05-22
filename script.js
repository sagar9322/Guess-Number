let number = Math.trunc(Math.random() * 20 + 1);
var score = 20;
let highscore = 0;

// function call when check button will click

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // when there is no value in input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Please Enter Valid Number';
    }

    // when guess less than number
    else if (guess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number is too 👎Low';
            score--;
        } else {
            document.querySelector('.message').textContent = '💥Game Over💥';
            document.body.style.backgroundColor = 'red';
            score = 0;
        }

    }

    //when guess grater than number
    else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number is too 👍High';
            score--;
        } else {
            document.querySelector('.message').textContent = '💥Game Over💥';
            document.body.style.backgroundColor = 'red';
            score = 0;
        }

    }

    // when guess equal to number
    else if (guess == number) {
        document.querySelector('.message').textContent = '🎉You Won🎉';
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        if (highscore < score) {
            highscore = score;
        }
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
});


// when again button will click.
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    number = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = "";
})