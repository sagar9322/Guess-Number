let number = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function(){
   let guess = Number(document.querySelector('.guess').value);
   if(!guess){
    document.querySelector('.message').textContent = '⛔ Please Enter Valid Number';
   }
   else if(guess < number){
    if(score > 1){
        document.querySelector('.message').textContent = 'Number is too 👎Low';
        score--;
    }else {
        document.querySelector('.message').textContent = '💥Game Over💥';
        document.body.style.backgroundColor = 'red';
        score = 0;
    }
    
   }
   else if(guess > number){
    if(score > 1){
        document.querySelector('.message').textContent = 'Number is too 👍High';
        score--;
    }else {
        document.querySelector('.message').textContent = '💥Game Over💥';
        document.body.style.backgroundColor = 'red';
        score = 0;
    }
    
   }
   else if(guess == number){
    document.querySelector('.message').textContent = '🎉You Won🎉';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if(highscore < score){
        highscore = score;
    }
   }
   document.querySelector('.score').textContent = score;
   document.querySelector('.highscore').textContent = highscore;
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    number = Math.trunc(Math.random()*20+1);
    document.querySelector('.guess').value = "";
})