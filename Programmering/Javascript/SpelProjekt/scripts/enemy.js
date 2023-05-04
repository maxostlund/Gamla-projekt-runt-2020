class Enemy 
{ 

	constructor(x,y, rotation, image, moveSpeed) 
	{
	this.x = x;
	this.y= y;
	this.rotation = rotation;
	this.image = image;
	this.moveSpeed = moveSpeed;
	this.direction = null;
	this.directionTimer;
	this.turret = new tankTurret(this.x, this.y, 0, enemyTurret, 26);
	this.health = 1;
	}
	drawEnemy() 
	{
		this.moveEnemy()
		c.setTransform(1,0,0,1, this.x, this.y);
		c.rotate(this.rotation * (Math.PI/180));
        c.drawImage(this.image, (-this.image.width/2), (-this.image.height/2));
		c.setTransform(1, 0, 0, 1, 0, 0);

		//turret
		this.turret.drawTurret(new Vector2(playerBody.x, playerBody.y));
	}
	moveEnemy() 
	{	
		//om riktningen inte �r best�ms best�ms en riktning som inte �r lika med nuvarande position, om riktningen �r diagonal �ndras vektorn s� att den blir lika med moveSpeed, rotationen ber�knas, vektorn adderas
		if(this.direction == null) 
		{
			this.directionTimer = Math.round(Math.random()*80 + 40);
			this.direction = new Vector2(Math.round((Math.random()*2-1)), Math.round((Math.random()*2-1)));

			while(this.direction.x == 0 && this.direction.y == 0) 
			{
				this.direction = new Vector2(Math.round((Math.random()*2-1)), Math.round((Math.random()*2-1)));
			}

			if(this.direction.x != 0 && this.direction.y != 0) //om man �ker diagonalt �ndras hastigheten s� att vektorns hypotenusa blir lika med moveSpeed
			{
				this.direction.x = this.direction.x * 0.707*this.moveSpeed;
				this.direction.y = this.direction.y * 0.707*this.moveSpeed;
			}
			else 
			{
				this.direction.x = this.direction.x * this.moveSpeed;
				this.direction.y = this.direction.y * this.moveSpeed;
			}
		}
		//boundaries
		if(this.x < 50) 
		{
			this.direction.x = Math.abs(this.direction.x);
		}
		else if (this.x > (canvas.width-50)) 
		{
			this.direction.x = -Math.abs(this.direction.x);
		}
		if(this.y < 50)
		{
			this.direction.y = Math.abs(this.direction.y);
		}
		else if(this.y > (canvas.height-50)) 
		{
			this.direction.y = -Math.abs(this.direction.y);
		}
		
		if(this.directionTimer == 0) 
		{
			//om den �r null beh�ver rotationen fortfarande best�mmas
			this.rotation = (Math.atan2(this.direction.y, this.direction.x))*(180/Math.PI);
			this.direction = null;
		}
		else 
		{
			this.x += this.direction.x;
			this.y += this.direction.y;
			this.rotation = (Math.atan2(this.direction.y, this.direction.x))*(180/Math.PI);
		}
		
		this.directionTimer -= 1;
	}
	
}