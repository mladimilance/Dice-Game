var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", randomImage1);
document.querySelector(".dice .img2").setAttribute("src", randomImage2);

if (randomImage1 > randomImage2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins";
} else if (randomImage1 < randomImage2) {
  document.querySelector("h1").innerText = "Player 2 Wins!🚩";
} else if (randomImage1 === randomImage2) {
  document.querySelector("h1").innerText = "Draw!";
}

  function refreshPage() {
      window.location.reload();
 }
