var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceeImage="dice"+randomNumber1+".png";
var randomDiceImageSource="images/"+randomDiceeImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2)
{
	document.querySelector("h1").innerHTML="❤ Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
	document.querySelector("h1").innerHTML="❤ Player 2 wins!";
}
else{
	document.querySelector("h1").innerHTML="Match Draw";
}
