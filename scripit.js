window.onload = function() {
	alert("Try avoiding the red coin if you want to win")
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = 250;
	var y = 150;
	var coinx = Math.random() * (600-50);
	var coiny = Math.random() * (400-50);
	var fakex = Math.random() * (600-50);
	var fakey = Math.random() * (400-50);
	
	var t = Date.now();
	let speed = 300;
	let dir = 0;
	let score = 0;

	let up = document.getElementById('up');
	let down = document.getElementById('down');
	let left = document.getElementById('left');
	let right = document.getElementById('right');

	up.onmousedown = function() { dir = 4;}
	down.onmousedown = function() { dir = 3;}
	left.onmousedown = function() { dir = 2;}
	right.onmousedown = function() { dir = 1;}

	up.ontouchstart = function() { dir = 4;}
	down.ontouchstart = function() { dir = 3;}
	left.ontouchstart = function() { dir = 2;}
	right.ontouchstart = function() { dir = 1;}

	up.onmouseup = function() { dir = 0;}
	down.onmouseup = function() { dir = 0;}
	left.onmouseup = function() { dir = 0;}
	right.onmouseup = function() { dir = 0;}

	up.ontouchend = function() { dir = 0;}
	down.ontouchend = function() { dir = 0;}
	left.ontouchend = function() { dir = 0;}
	right.ontouchend = function() { dir = 0;}

	function draw(){
		var timePassed = (Date.now()-t)/1000;
		t = Date.now();

		context.clearRect(0, 0, 600, 400);

		context.font = '25px Arial';
		context.fillStyle = 'black';
		context.fillText("score:" + score, 20, 30);
	  
		context.beginPath();
		context.rect(x, y, 50, 50);
		context.fillStyle="black";
		context.fill();

		context.beginPath();
		context.rect(coinx, coiny, 50, 50);
		context.fillStyle='#e0ac00';
		context.fill();
		
		context.beginPath();
		context.rect(fakex, fakey, 50, 50);
		context.fillStyle='red';
		context.fill();

		if(dir == 1){
			if(x+50 < 600){
				x+=(speed*timePassed);
			}
		}
		else if(dir == 2){
			if(x>0){
				x-=(speed*timePassed);
			}
		}
		else if(dir == 3){
			if(y+50< 400){
				y+=(speed*timePassed);
			}
		}
		else if(dir == 4){
			if(y>0){
				y-=(speed*timePassed);
			}
		}

		if(coinx <= x+50 && x<=coinx+50 && coiny <= y+50 && y<coiny+50 && score<5){
			score ++;
			coinx = Math.random()*(600-50);
			coiny = Math.random()*(400-50);
			fakex = Math.random() * (600-50);
			fakey = Math.random() * (400-50);
		}
		else if(fakex  <= x+50 && x<=fakex +50 && fakey <= y+50 && y<fakey+50 && score<5){
			score --;
			coinx = Math.random()*(600-50);
			coiny = Math.random()*(400-50);
			fakex = Math.random() * (600-50);
			fakey = Math.random() * (400-50);}
		else if(score == 5){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.font = '25px Arial';
			context.textAlign	= 'center';
			context.fillStyle = '#e0ac00';
			context.fillText("Congratulation You Have Won!", canvas.width/2, canvas.height/2);
		}
		else if(score < 0){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.font = '25px Arial';
			context.textAlign	= 'center';
			context.fillStyle = '#e0ac00';
			context.fillText("GAME OVER !", canvas.width/2, canvas.height/2);
		}

		window.requestAnimationFrame(draw);
	}
	draw();
}