//Kommunikation med andra dokumentet, förkorta canvas till c, bestämma canvas storleken
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth-5; 
canvas.height = window.innerHeight-5;
c.font = "40px Stencil";

//menyer och koordinater för playknappen
var playGame = false;
var playMenu = true;
var playDeathMenu = false;
var playX = canvas.width/2-75;
var playY = canvas.height/2+200;

//spelare
var playerBody = new Player(canvas.width/2, canvas.height/2, 0, body, 2); //x, y, rotation, bild
var playerTurret = new tankTurret(playerBody.x,playerBody.y, 0, turret, 23); //x, y, rotation, bild, längd på dess turret

//hälften av tankens tjocklek
const tankHalfWidth = 15;
const enemyTankHalfWidth = 18;

//objekt för spelarens projektiler
let projectileObj;

var mouseDown = false;
var mousePos = new Vector2(0,0);

var projectileMoveSpeed = 5;

var isShooting = false;
//variabler fär tangenter
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

//scoremätare

var score = 0;
var difficulty = "normal";

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect( 0, 0, innerWidth, innerHeight);
    
    //om spelet spelas
    if(playGame == true) 
    {
        c.setTransform(5,0,0,2, canvas.width/2, canvas.height/2);
        c.drawImage(groundImage, (-groundImage.width/2), (-groundImage.height/2));
        c.setTransform(1, 0, 0, 1, 0, 0);
        //score
        score ++; 
        c.fillText(score, canvas.width/2-20, 100);

        //"spelarkommandon"
        playerBody.movePlayer();
        playerBody.drawPlayer();
        playerTurret.shootingTest();
        playerTurret.goToParent(playerBody.x, playerBody.y);
        playerTurret.drawTurret(mousePos);
    
        //turretsaker
        for(let i in turretArray)
        {
            turretArray[i].thisTurretsProjectilesMove();
            turretArray[i].projectileCheck();
        }
        //fiendesaker
        enemyHandler();
    }

    //om main menyn är main meny
    if(playMenu == true) 
    {   
        c.fillStyle = "white";
        c.setTransform(1.5,0,0,1.5, canvas.width/2, canvas.height/2);
        c.drawImage(menuImage, (-menuImage.width/2), (-menuImage.height/2));
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.font = "15px Stencil";
        c.fillText("Move using WASD", 10, 20);
        c.fillText("Shoot using LMB", 150, 20);
        c.font = "40px Stencil";
        //PLAY
        c.fillText("PLAY", playX, playY);
        if(mousePos.x > (playX-50) && mousePos.x < (playX+150) && mousePos.y > (playY-75) && mousePos.y < (playY+20) && mouseDown == true) 
        {
            playMenu = false;
            playGame = true;
        }
        //DIFFICULTIES
        c.fillText("Difficulty", playX-60, playY+70);
        //easy
        if(difficulty == "easy") 
        {
            c.fillStyle = "#009e0b";
        }
        else 
        {
            c.fillStyle = "white";
        }
        c.fillText("EASY", playX-145, playY+140);
        c.fillStyle = "black";
        if(mousePos.x > (playX-145) && mousePos.x < (playX-45) && mousePos.y > (playY+90) && mousePos.y < (playY+180) && mouseDown == true) 
        {
            difficulty = "easy";
        }
        //normal
        if(difficulty == "normal") 
        {
            c.fillStyle = "#ffdb26";
        }
        else 
        {
            c.fillStyle = "white";
        }
        c.fillText("NORMAL", playX-30, playY+140);
        c.fillStyle = "black";
        if(mousePos.x > (playX-35) && mousePos.x < (playX+130) && mousePos.y > (playY+90) && mousePos.y < (playY+180) && mouseDown == true) 
        {
            difficulty = "normal";
        }
        //hard
        if(difficulty == "hard") 
        {
            c.fillStyle = "#a60000";
        }
        else 
        {
            c.fillStyle = "white";
        }
        c.fillText("HARD", playX+150, playY+140);
        c.fillStyle = "black";
        if(mousePos.x > (playX+145) && mousePos.x < (playX+270) && mousePos.y > (playY+90) && mousePos.y < (playY+180) && mouseDown == true) 
        {
            difficulty = "hard";
        }
        
    }

    //döds menyn 
    if(playDeathMenu == true)
    {
        playerBody.x = canvas.width/2;
        playerBody.y = canvas.height/2;
        
        enemySpawnTimer = 0;
        enemySpawnLoop = 230;

        for(let i in turretArray)
        {
            turretArray[i].projectileArray = [];
        }
        
        for(i in enemyArray) 
        {
            enemyArray.splice(i, enemyArray.length);
        }

        c.fillText("SCORE: ", canvas.width/2 - 170, canvas.height/2-200);
        c.fillText(score,canvas.width/2+50, canvas.height/2-200);
        c.fillText("PLAY AGAIN?", canvas.width/2-150, canvas.height/2);
        if(mousePos.x > (canvas.width/2-190) && mousePos.x < (canvas.width/2+190) && mousePos.y > (canvas.height/2-60) && mousePos.y < (canvas.height/2+30) && mouseDown == true) 
        {
            playDeathMenu = false;
            score = 0;
            playGame = true;
        }
        c.fillText("MAIN MENU", canvas.width/2-140, canvas.height/2+100);
        if(mousePos.x > (canvas.width/2-190) && mousePos.x < (canvas.width/2+150) && mousePos.y > (canvas.height/2+40) && mousePos.y < (canvas.height/2+150) && mouseDown == true) 
        {
            playDeathMenu = false;
            score = 0;
            playMenu = true;
        }
    }
}

animate();