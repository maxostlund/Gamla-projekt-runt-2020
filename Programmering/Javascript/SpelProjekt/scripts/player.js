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
        c.setTransform(1,0,0,1, this.x, this.y);
        c.rotate(this.rotation * (Math.PI/180));
        c.drawImage(this.image, (-this.image.width/2), (-this.image.height/2));
        c.setTransform(1, 0, 0, 1, 0, 0);
    }
    movePlayer() 
    {
        //om spelaren rör sig diagonalt måste movespeed bli roten ur 2 genom 2 gånger (ca 0.707) så stor som tidigare för att hypotenusan (eller riktningsvektorn) ska bli lika stor som movespeed 
        if (keyD == true && keyW == true) //D & W
        {   
            var moveSave = this.moveSpeed;
            this.moveSpeed = this.moveSpeed*0.707; 
            this.x += this.moveSpeed;
            this.y -= this.moveSpeed;
            this.rotation = 315;
            this.moveSpeed = moveSave;
        }
        else if (keyD == true && keyS == true) //D & S
        {
            var moveSave = this.moveSpeed;
            this.moveSpeed = this.moveSpeed*0.707;
            this.x += this.moveSpeed;
            this.y += this.moveSpeed;
            this.rotation = 45;
            this.moveSpeed = moveSave;
        }
        else if( keyA == true && keyS == true) //A & S
        {   
            var moveSave = this.moveSpeed;
            this.moveSpeed = this.moveSpeed*0.707;
            this.x -= this.moveSpeed;
            this.y += this.moveSpeed;
            this.rotation = 135;
            this.moveSpeed = moveSave;
        }
        else if (keyA == true && keyW == true) //A & W
        {
            var moveSave = this.moveSpeed;
            this.moveSpeed = this.moveSpeed*0.707;
            this.x -= this.moveSpeed;
            this.y -= this.moveSpeed;
            this.rotation = 225;
            this.moveSpeed = moveSave;
        }
        else if (keyD == true) //D
        {
            this.x += this.moveSpeed;
            this.rotation = 0;
        }
        else if (keyA == true) //A
        {
            this.x -= this.moveSpeed;
            this.rotation = 180;
        }
        else if (keyW == true) //W
        {
            this.y -= this.moveSpeed;
            this.rotation = 90;
        }
        else if (keyS == true) //S
        { 
            this.y += this.moveSpeed;
            this.rotation = -90; 
        }
    }
    playerDeath() 
    {
        console.log("player has become death");
        playGame = false;
        playDeathMenu = true;
    }
}