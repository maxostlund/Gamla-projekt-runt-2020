let turretArray = [];

class tankTurret 
{
    constructor(x,y, rotation, image,turretLength) 
    {
        turretArray.push(this);
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.image = image;
        this.projectileArray = [];
        this.shootingTimer = 5;
        this.isShooting = false;
        this.turretLength = turretLength;
    }
    goToParent(x,y) 
    {
        this.x = x;
        this.y = y;
    }
    drawTurret(vector) 
    {
        if(vector == null) 
        {
            
        }
        else 
        {
            this.rotation = Math.atan2(vector.y - this.y, vector.x - this.x);        
        }
        
        c.setTransform(1,0,0,1, this.x, this.y);
        c.rotate(this.rotation);
        c.drawImage(this.image, (-this.image.width/2), (-this.image.height/2));
        c.setTransform(1, 0, 0, 1, 0, 0);
    }
    thisTurretsProjectilesMove() 
    {
        if(this.projectileArray.length == 0) 
        {
            
        }
        else 
        {
            for(var i = 0; i < this.projectileArray.length; i++) 
            {
                this.projectileArray[i].drawProjectile(this.rotation);
            }
        }
    }
    shootingTest() 
    {
        
        if(this.isShooting == true && this.shootingTimer < 1) 
        {
            //kalla på funktion som skjuter
            projectileObj = new Projectiles((this.x + this.turretLength*Math.cos(this.rotation)), (this.y + this.turretLength*Math.sin(this.rotation)), projectileSprite); //variablen som används för att skapa nya projektiler skapar en projektil hos turreten, med avseende på rotation och turretlängd, och sedan vilken bild projektilen ska ha
            this.projectileArray.push(projectileObj);
            this.shootingTimer = 60;
        }
        this.shootingTimer -= 1;
    }
    projectileCheck() 
    {
        for(var i = 0; i < this.projectileArray.length; i++) 
        {
            if(this.projectileArray[i].health > 0) 
            {
                //lever den så händer inget
            }
            else
            {
                this.projectileArray.splice(i,1);
            }
        }
    }
    enemyShootingTest() 
    {
        if(this.shootingTimer < 1) 
        {
            //kalla på funktion som skjuter
            projectileObj = new Projectiles((this.x + this.turretLength*Math.cos(this.rotation)), (this.y + this.turretLength*Math.sin(this.rotation)), projectileSprite); //variablen som används för att skapa nya projektiler skapar en projektil hos turreten, med avseende på rotation och turretlängd, och sedan vilken bild projektilen ska ha
            this.projectileArray.push(projectileObj);
            if(difficulty == "easy") 
            {
                this.shootingTimer = 150;
            }
            else if(difficulty == "normal") 
            {
                this.shootingTimer = 110;
            }
            else if(difficulty == "hard") 
            {
                this.shootingTimer = 60;
            }
        }
        this.shootingTimer -= 1;
    }
}