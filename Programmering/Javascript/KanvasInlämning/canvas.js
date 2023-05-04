console.log('Hello, Canvas');
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth; 
canvas.height = 0.8*window.innerHeight;

// Blå bakgrund
c.fillStyle = "#3CD0FF";
c.fillRect(0, 0, 2000, 3000);


function mountain() {
    c.beginPath();
    c.moveTo(0,400);
    c.lineTo(200,350);
    c.lineTo(250,400);
    c.lineTo(350,250);
    c.lineTo(400,320);
    c.lineTo(500,225);
    c.lineTo(550,250);
    c.lineTo(800,150);
    c.lineTo(1200,300);
    c.lineTo(1400,250);
    c.lineTo(1650, 325);
    c.lineTo(1700, 750);
    c.lineTo(0,750);
    //samma som första
    c.lineTo(3,400);
    c.lineWidth = 20;
    c.fillStyle = "#A9A9A9";

    c.fill();
    c.closePath();
}

function addsnow() {
    c.beginPath();
    c.fillStyle = "white";
    c.lineWidth = 5;

//bergstopp 1
    c.beginPath();
    c.moveTo(350,250);
    c.lineTo(377,290);
    c.lineTo(298,330);
    c.fill();
    c.closePath();

//bergstopp 2
    c.beginPath();
    c.moveTo(500,225);
    c.lineTo(540,245);
    c.lineTo(442,280);
    c.fill();
    c.closePath();

//bergstopp 3
    c.beginPath();
    c.moveTo(800,150);
    c.lineTo(935,200);
    c.lineTo(580, 238);
    c.fill();
    c.closePath();

//bergstopp 4
    c.beginPath()
    c.moveTo(1400,250);
    c.lineTo(1568, 300);
    c.lineTo(1280, 280);
    c.fill();
    c.closePath();

}

function grassland() {
    c.beginPath();
    c.moveTo(0,550);
    c.lineTo(230, 530);
    c.lineTo(240,540);
    c.lineTo(400,500);
    c.lineTo(430, 520);
    c.lineTo(650, 450);
    c.lineTo(800, 420);
    c.lineTo(1000, 470);
    c.lineTo(1200,500);
    c.lineTo(1600,600);
    c.lineTo(1700, 630);
    
//ner till högra hörnet och sen vänstra och sen startpos där den sen fyller igen
    c.lineTo(1700,750);
    c.lineTo(0,750);
    c.lineTo(0,550);
    c.lineWidth = 20;
    c.fillStyle = "#4a965a";
    c.fill();
    c.closePath();
}

function addtrees() {
	
    for (var i = 0; i < 60; i++) {	
	    addtree();
    } 
}

function addtree() {
    var x;
    var y;
    x = Math.floor(Math.random() * 1701);
    y = Math.floor(Math.random() * 151) + 500;
    for (var j = 0; j < 3; j++) {
	c.fillStyle = "#3d8a4b";
	c.beginPath();
	c.moveTo(x,y);
	c.lineTo(x+20,y+20);
	c.lineTo(x-20, y+20);
	c.fill();
	c.closePath();
	y+=10;
    }
    c.beginPath();
    c.fillStyle = "#61543b";
    c.fillRect(x,y+10,5,10);
    c.closePath();
}


/* Text
c.fillStyle = "black";
c.font = "24px Times";
c.textAlign = "left";
c.fillText("Rektangel 200 x 300 med positionen (100, 100)", 100, 450); */

mountain();
grassland();
addsnow();
addtrees();