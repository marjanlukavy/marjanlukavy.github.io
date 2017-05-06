var ball = 0;
var goal = 10;
var teamA = 0;
var teamB = 0;
button.addEventListener('click', () => {
        ball = Math.floor(Math.random(0) * 20);               
       if(ball > goal) {
         teamA++;
         console.log("Team A " + teamA);
       } else {
         teamB++;
         console.log("Team B "  + teamB);
       }                 
});