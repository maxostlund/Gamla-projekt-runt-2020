
//Kommunikation med andra dokumentet, förkorta canvas till c, bestämma canvas storleken
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth-5; 
canvas.height = window.innerHeight-5;

//Klasser

class Vector2 
{
    constructor(x,y) 
    {
        this.x = x;
        this.y = y;
    }
    moveToward(vector, destinationVector, moveSpeed) 
    {
        //förflyttar vector till destinationVector med moveSpeed per gång som funktionen är kallad.
        if(vector.x != destinationVector.x && vector.y != destinationVector.y) 
        {
            //Om första vektorn har olika x-värde och olika y-värde som punkten dit den ska, så måste moveSpeed ändras för att vektorn inte ska röra sig snabbare diagonalt än horisontellt eller vertikalt (pythagoras)
            moveSpeed = ((moveSpeed * Math.sqrt(2))/2)
            //formeln ovanför ändrar moveSpeeds värde, så att när vektorn ändras diagonalt, så är hypotenusan lika med originella värdet för moveSpeed
        }

        //kollar var destinationVector är i förhållande till vector
        if(vector.x > destinationVector) 
        {
            //vector är till höger om destinationVector och ska därmed förflyttas vänster

            if(vector.y > destinationVector) 
            {  
                //vector är till höger om, och under destinationVector, och ska alltid subtrahera moveSpeed för x-led och y-led
                vector.x -= moveSpeed;
                vector.y -= moveSpeed;
            }
            else 
            {
                //vector är till höger om, och över destinationVector och ska subtrahera moveSpeed för x-led och addera moveSpeed för y-led
                vector.x -= moveSpeed;
                vector.y += moveSpeed;
            }
        }
        else 
        {  
            //vector är till vänster om destinationVector
            if(vector.y > destinationVector) 
            {   
                //vector är till vänster om, och under destinationVector
                vector.x += moveSpeed;
                vector.y -= moveSpeed;
            }
            else 
            {
                //vector är till vänster om, och över destinationVector
                vector.x += moveSpeed;
                vector.y += moveSpeed;
            }
        }
    }
}

//Sprites import
//tankkropp
var body = new Image();
body.src = './pictures/BodyPlaceholder.png';
//tanktorn
var turret = new Image();
turret.src = './pictures/TurretPlaceholder.png';

//variabler
var x = 200;
var y = 200;
var moveSpeed = 2;
var rotation = 0;

var direction = new Vector2(x,y);


var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;


//lyssnar efter tangenttryck
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

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
      keyD = false;
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

    



	drawTankBody( direction.x, direction.y, body,rotation);


    //c.drawImage(turret,x,y);

    console.log(Math.PI/180);

}

function drawTankBody(x,y,image,rotation) 
{
    c.save();
    c.translate(x,y);
    c.rotate(rotation * (Math.PI/180));
    c.drawImage(body, (-body.width/2), (-body.height/2));
    c.restore();
}

function setPlayerDirection() 
{
    if (keyD == true) 
    {
        direction.x += moveSpeed;
        rotation = 0;
    }
    if (keyA == true) 
    {
        direction.x -= moveSpeed;
        rotation = 180;
    }
    if (keyW == true) 
    {
        direction.y -= moveSpeed;
        rotation = 90;
    }
    if (keyS == true) 
    { 
        direction.y += moveSpeed;
        rotation = -90; 
    }
}

animate();