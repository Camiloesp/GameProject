var score = 0;
var level = 0;
var colorCode = [];
var colorPressed;
var enableButton = false;
var playing = false;
var check = false;
console.log(score);
function start()
{
	score = 0;
	level = 0;
	colorCode = [];
	colorPressed;
	enableButton = false;
	playing = false;
	check = false;
	gameStart();
}
function gameStart()
{
	console.log("start");
	//instructions before starting
	//start game loop
	
	colorCode[level] = Math.floor(Math.random() * 4);
		
	for(var x = 0; x < colorCode.length; x++)
	{
		console.log(colorCode[x]);
		blink(colorCode[x]);
	}
	enableButton = true;
	//user enters code
	if(enableButton)
	{
		//ended here today
	}
	level++;
	console.log("done");
	//end game
	if(playing)
	{
		gameStart();
	}
}
function blink(n)
{
	console.log(n);
	if(n == 0)
	{
		console.log("red");
		document.querySelectorAll("button.red").style.backgroundColor = "red";
		setTimeout(document.querySelectorAll("button.red").style.backgroundColor = "#b51500", 4000);
	}
	else if(n == 1)
	{
		console.log("yellow");
		document.querySelectorAll("button.yellow").style.backgroundColor = "yellow";
		setTimeout(document.querySelectorAll("button.yellow").style.backgroundColor = "#b0b300", 4000);
	}
	else if(n == 2)
	{
		console.log("green");
		document.querySelectorAll("button.green").style.backgroundColor = "#00ab0e";
		setTimeout(document.querySelectorAll("button.green").style.backgroundColor = "green", 4000);
	}
	else if(n == 3)
	{
		console.log("blue");
		document.querySelectorAll("button.blue").style.backgroundColor = "#61a3ff";
		setTimeout(document.querySelectorAll("button.blue").style.backgroundColor = "blue", 4000);
	}
	else
	{
		console.log("error");
	}
	
}
function pressed(n)
{
	colorPressed = n;
	check = true;
}