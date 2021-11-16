//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById("ball");
const velocityX = 100;
const velocityY = 75
var positionX = 0;
var positionY = 200;
var reverse = {
  Y: false, 
  X: false,
};
const Xmin = 10;
const Xmax = 300;
const Ymin = 10;
const Ymax = 300;
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  if(positionX >= Xmax){
    reverse.X = true;
    reverseX();
  }
  else { 
    if(positionX <= Xmin){
    reverse.X = false;
    forwardX();
    }
  }
  if (positionY >= Ymax) {
    reverse.Y = true;
    reverseY();
  }
  else { 
    if (positionY <= Ymin){
      reverse.Y = false;
      forwardY();
    }
  }
  if(reverse.X === true){
    reverseX();
  }
  else { 
    if(reverse.X === false){
      forwardX();
    }
  }
  if(reverse.Y === true){
    reverseY();
  }
  else { 
    if(reverse.Y === false){
      forwardY();
    }
  }
}
function forwardX(){
  positionX = velocityX + positionX;
  ball.style.left = `${positionX}px`;
}
function reverseX(){
  positionX = positionX - velocityX; 
  ball.style.left = `${positionX}px`; 
}
function forwardY() {
  positionY = velocityY + positionY;
  ball.style.top = `${positionY}px`;
}
function reverseY() {
  positionY = positionY - velocityY;
  ball .style.top = `${positionY}px`;
}

// This call the moveBall function every 100ms
setInterval(moveBall, 250) ;

