
//Kommunikation med andra dokumentet, förkorta canvas till c, bestämma canvas storleken
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth-5; 
canvas.height = window.innerHeight-5;

//Klasser

class Player
{
    constructor(x, y, rotation, image, moveSpeed) 
    {
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.image = image;
        this.moveSpeed = moveSpeed;
    }
    drawPlayer() 
    {
        c.save();
        c.translate(this.x,this.y);
        c.rotate(this.rotation * (Math.PI/180));
        c.drawImage(this.image, (-this.image.width/2), (-this.image.height/2));
        c.restore();
    }
}

class tankTurret 
{
    constructor(x,y, rotation, image) 
    {
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.image = image;
    }
    goToParent(x,y) 
    {
        this.x = x;
        this.y = y;
    }
    drawTurret() 
    {
        c.save();
        c.translate(this.x,this.y);
        c.rotate(this.rotation * (Math.PI/180));
        c.drawImage(this.image, (-this.image.width/2), (-this.image.height/2));
        c.restore();
    }
    pointTowardVector(vector) 
    {
        
    }
}

class Vector2 
{
    constructor(x,y) 
    {
        this.x = x;
        this.y = y;
    }
}

//Sprites import

//tankkropp
var body = new Image();
body.src = './pictures/BodyPlaceholder.png';

//tanktorn
var turret = new Image();
turret.src = './pictures/TurretPlaceholder.png';

var playerBody = new Player(100, 100, 0, body, 2);

var playerTurret = new tankTurret(100,100, 0, turret);

var mousePos = new Vector2(0,0);

//lyssnar efter tangenttryck

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

window.addEventListener('mousemove', function(e) 
{
    mousePos.x = e.x;
    mousePos.y = e.y;
});

//variabler fär tangenter
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

function onKeyDown(event) 
{
    var keyCode = event.keyCode;
    switch (keyCode) 
    {
        case 68: //d
            keyD = true;
            break;
        case 83: //s 
            keyS = true;
            break;
        case 65: //a 
            keyA = true;
            break;
        case 87: //w 
            keyW = true;
            break;
    }
}


function onKeyUp(event) {
    var keyCode = event.keyCode;

    switch (keyCode) {
        case 68: //d
            keyD = false
            break;
        case 83: //s
            keyS = false;
            break;
        case 65: //a
            keyA = false;
            break;
        case 87: //w
            keyW = false;
            break;
    }
}

function animate()
{
	requestAnimationFrame(animate);

	c.clearRect( 0, 0, innerWidth, innerHeight);

    movePlayer();

    playerBody.drawPlayer();

    playerTurret.goToParent(playerBody.x, playerBody.y);
    playerTurret.drawTurret();

}

function draw(x,y,image,rotation) 
{
    c.save();
    c.translate(x,y);
    c.rotate(rotation * (Math.PI/180));
    c.drawImage(body, (-body.width/2), (-body.height/2));
    c.restore();
}

function movePlayer() 
{
    if (keyD == true && keyW == true) //D & W
    {   
        var moveSave = playerBody.moveSpeed;
        playerBody.moveSpeed = playerBody.moveSpeed*0.707;
        playerBody.x += playerBody.moveSpeed;
        playerBody.y -= playerBody.moveSpeed;
        playerBody.rotation = 315;
        playerBody.moveSpeed = moveSave;

    }
    else if (keyD == true && keyS == true) //D & S
    {
        var moveSave = playerBody.moveSpeed;
        playerBody.moveSpeed = playerBody.moveSpeed*0.707;
        playerBody.x += playerBody.moveSpeed;
        playerBody.y += playerBody.moveSpeed;
        playerBody.rotation = 45;
        playerBody.moveSpeed = moveSave;
    }
    else if( keyA == true && keyS == true) //A & S
    {   
        var moveSave = playerBody.moveSpeed;
        playerBody.moveSpeed = playerBody.moveSpeed*0.707;
        playerBody.x -= playerBody.moveSpeed;
        playerBody.y += playerBody.moveSpeed;
        playerBody.rotation = 135;
        playerBody.moveSpeed = moveSave;
    }
    else if (keyA == true && keyW == true) //A & W
    {
        var moveSave = playerBody.moveSpeed;
        playerBody.moveSpeed = playerBody.moveSpeed*0.707;
        playerBody.x -= playerBody.moveSpeed;
        playerBody.y -= playerBody.moveSpeed;
        playerBody.rotation = 225;
        playerBody.moveSpeed = moveSave;
    }
    else if (keyD == true) //D
    {
        playerBody.x += playerBody.moveSpeed;
        playerBody.rotation = 0;
    }
    else if (keyA == true) //A
    {
        playerBody.x -= playerBody.moveSpeed;
        playerBody.rotation = 180;
    }
    else if (keyW == true) //W
    {
        playerBody.y -= playerBody.moveSpeed;
        playerBody.rotation = 90;
    }
    else if (keyS == true) //S
    { 
        playerBody.y += playerBody.moveSpeed;
        playerBody.rotation = -90; 
    }
}

animate();