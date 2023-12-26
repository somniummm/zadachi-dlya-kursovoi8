let input = document.querySelectorAll('input');
let button = document.querySelectorAll('button');
let p = document.querySelectorAll('p');
let span = document.querySelectorAll('span'); 

let random = function(){
    return Math.floor(Math.random() * 100)
}

let a = random();

button[0].onclick = () => {
    if(+input[0].value < a){
        p[0].innerHTML = 'введите число побольше';
    }else if(+input[0].value > a){
        p[0].innerHTML = 'введите число поменьше';
    }else{
        p[0].innerHTML = 'Ты угадал число: ' + a;
    }
}

window.onload = start; 

let timer;
let seconds = 0;
let minutes = 2;

function update() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if(minutes == 0 && seconds ==0){
    stop();
  }
  span[0].innerHTML = minutes;
  span[1].innerHTML = seconds;
}

function start() {
    clearInterval(timer); 
    timer = setInterval(update, 1000); 
  }
  
function stop() {
    clearInterval(timer);
    p[0].innerHTML = 'Ты не успел!';
    button[0].remove();
}