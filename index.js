//for random no 1
  var randomNo1 = (Math.floor(Math.random()*6))+1; // 1-6
  var diceImage1 ="images/dice" + randomNo1+".png"; // images/dice1.png-images/dice6.png
  var image1=document.querySelectorAll("img")[0];
  image1.setAttribute("src",diceImage1);
//for random no 2
  var randomNo2 =(Math.floor(Math.random()*6))+1;//1-6
  var diceImage2 ="images/dice" + randomNo2+".png";//images/dice1.png-images/dice6.png
  var image2=document.querySelectorAll("img")[1];
  image2.setAttribute("src",diceImage2);


// // for h1
if(randomNo1>randomNo2){ //if player1 wins
   document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
 }
 else if (randomNo1<randomNo2) { //if player2 wins
   document.querySelector("h1").innerHTML=" Player 2  wins! 🚩";
 }
 else{//draw
   document.querySelector("h1").innerHTML=" OOPs! You both lost.";
 }
