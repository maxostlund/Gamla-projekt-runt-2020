
class Projectiles 
{
	constructor(x,y, image)
	{
		this.x = x;
		this.y = y;
		this.dx = null;
		this.dy = null;
		this.image = image;
		this.health = 2;
	}
	drawProjectile(rotation) 
	{
		this.collisionDetection();

		if(this.dx == null && this.dy == null) 
		{
			this.dx = projectileMoveSpeed*Math.cos(rotation);
			this.dy = projectileMoveSpeed*Math.sin(rotation); 
			this.rotation = rotation;
			this.x += this.dx;
			this.y += this.dy;
		}
		else 
		{
			if(this.x < 10 || this.x > (canvas.width-10)) 
			{
				if(this.health == 2) 
				{
					this.dx = -this.dx;
					if(this.dy > 0) 
					{
						this.rotation = Math.acos(this.dx/projectileMoveSpeed);	
					}
					else 
					{
						this.rotation = -Math.acos(this.dx/projectileMoveSpeed);	//javascripts vinklar är konstiga så jag gör såhär för det funkar. (det är ett interval mellan -180 och 180 istället för 0-360 och allt är skumt
					}
					this.health -=1;
				}
				else 
				{
					this.health = 0;
				}
				
			} 
			if(this.y > (canvas.height-10) || this.y < 10) 
			{
				if(this.health == 2) 
				{
					this.dy = -this.dy;
					this.rotation = -this.rotation;	
					this.health -=1;
				}
				else 
				{
					this.health = 0;
				}
			}

			this.x += this.dx;
			this.y += this.dy;

		}
	
		c.setTransform(1,0,0,1, this.x, this.y);
        c.rotate(this.rotation);
        c.drawImage(this.image, (-this.image.width/2), (-this.image.height/2));
        c.setTransform(1, 0, 0, 1, 0, 0);
	}
	collisionDetection() 
	{
		//playercollisiontest
		if(this.x > (playerBody.x - tankHalfWidth ) && this.x < (playerBody.x +tankHalfWidth) && this.y > (playerBody.y-tankHalfWidth) && this.y < (playerBody.y+tankHalfWidth) ) 
		{
			//spelaren är träffad
			playerBody.playerDeath();
			this.health = 0;
		}

		//fiendercollisiontest
		for(let i in enemyArray)
		{
			if(this.x > (enemyArray[i].x - enemyTankHalfWidth ) && this.x < (enemyArray[i].x +enemyTankHalfWidth) && this.y > (enemyArray[i].y-enemyTankHalfWidth) && this.y < (enemyArray[i].y+enemyTankHalfWidth) ) 
			{
				//en fioende är träffad
				enemyArray[i].health = 0;
				this.health = 0;
			}
			
		}
	}
}