const button = document.getElementById("button");
const goalATeam = document.getElementById("zero");
const goalBTeam = document.getElementById("zeros");
let ball1 = document.getElementById("ball1");
let ball2 = document.getElementById("ball2");
const paragraph = document.getElementById("paragraph");
var ball = 0;
var goal = 10;
var teamA = 1;
var teamB = 1;
ball1.style.display = "none";
ball2.style.display = "none";
button.addEventListener('click', () => {
      ball = Math.floor(Math.random() * 20 + 1);
      ball1.style.display = "none";
      ball2.style.display = "none";
      if(ball > goal) {
        ball1.style.display = "block";
        ball1.style.marginLeft = "180px";
        goalATeam.style.color = "red";
        goalATeam.innerHTML = teamA++;

      } else {
        ball2.style.display = "block";
        ball2.style.marginLeft = "180px";
        goalBTeam.style.color = "blue";
        goalBTeam.innerHTML = teamB++;
      }

});
