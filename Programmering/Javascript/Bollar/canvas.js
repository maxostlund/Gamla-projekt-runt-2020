
//Kommunikation med andra dokumentet, förkorta canvas till c, bestämma canvas storleken
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

function Circle(x,y,dx,dy,radius) 
{
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() 
	{
		c.beginPath();
		c.arc( this.x, this.y, this.radius, 0 , Math.PI*2, false);
		c.strokeStyle = "#e600ff";
		c.lineWidth = 5;
		c.stroke();
		c.fill();
		c.closePath();
	}

	this.update = function() 
	{
		if ((this.x+this.radius) > innerWidth || (this.x-this.radius) < 0 ) { this.dx = -this.dx; } 
		if ( (this.y+this.radius) > innerHeight || (this.y-this.radius) < 0 ) {this.dy = -this.dy; }

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var circleArray = [];

for (var i = 0; i < 300; i++) 
{
	var radius = 45;
	var x = Math.random()* (innerWidth - radius*2) + radius;
	var y = Math.random()* (innerHeight - radius*2) + radius;
	var dx = (Math.random() - 0.5) * 8;
	var dy = (Math.random() - 0.5) * 8
	circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate()
{
	requestAnimationFrame(animate);
	
	c.clearRect( 0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) 
	{
		circleArray[i].update();
	}
	console.log('Total mängd frames som spelats');
}



animate();