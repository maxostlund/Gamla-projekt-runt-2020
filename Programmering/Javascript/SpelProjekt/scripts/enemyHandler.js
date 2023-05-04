var enemyArray = [];

//varje frame ökar värdet för enemySpawnTimer och när värdet når enemySpawnLoop så blir enemySpawnTimer lika med 0 och enemySpawnTimer lika med enemySpawnLoop minus 1 detta skapar ett exponentiellt skapande av fiender
let enemySpawnTimer = 0;
let enemySpawnLoop = 230;


function spawnEnemy() 
{
	//ett av fönstrets 4 sidor
	spawnChoice = Math.floor(Math.random()*4);
	
	var spawnX;
	var spawnY;
	
	switch(spawnChoice) 
	{
		case 0:
			spawnY = -5;
			spawnX = Math.floor(Math.random()*canvas.width);
			break;
		case 1:
			spawnY = (canvas.height+5);
			spawnX = Math.floor(Math.random()*canvas.width);
			break;
		case 2:
			spawnX = -5;
			spawnY = Math.floor(Math.random()*canvas.height);
			break;
		case 3:
			spawnX = (canvas.width+5)
			spawnY = Math.floor(Math.random()*canvas.height);
			break;
		default:
			break;
	}

	
	var enemySpawnerVariable = new Enemy(spawnX, spawnY, 0, enemyBody, 1.5);
	enemyArray.push(enemySpawnerVariable);
	
}

function enemyHandler() 
{
	if(enemySpawnLoop < 25) 
	{
		enemySpawnLoop = 25;
		enemySpawnTimer++;
	}
	else 
	{
		enemySpawnTimer++;
	}
	if(enemySpawnTimer > enemySpawnLoop) 
	{
		enemySpawnLoop -= 1;
		enemySpawnTimer = 0;
		spawnEnemy();
	}

	enemyLivesCheck();
	drawAllEnemies();

	//enemy turret stuff
	for(var i in enemyArray) 
	{
		enemyArray[i].turret.goToParent(enemyArray[i].x, enemyArray[i].y);		
		enemyArray[i].turret.enemyShootingTest();

	}
}

function drawAllEnemies() 
{
	if(enemyArray.length == 0) 
	{
	}
	else 
	{
		for(var i = 0; i < enemyArray.length; i++) 
            {
                enemyArray[i].drawEnemy();
            }
	}
}

function enemyLivesCheck() 
{
	for(let i in enemyArray) 
	{
		if(enemyArray[i].health < 1) 
		{
			turretArray.splice((i+1),1);
			enemyArray.splice(i,1);
		}
	}
}