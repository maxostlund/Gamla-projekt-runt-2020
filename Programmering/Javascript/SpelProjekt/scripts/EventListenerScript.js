
//när musen rör sig
window.addEventListener('mousemove', function(e) 
{
    mousePos.x = e.x;
    mousePos.y = e.y;
});

//mousedown

window.addEventListener('mousedown', (e) => 
{
    playerTurret.isShooting = true;
    mouseDown = true;
}); 
window.addEventListener('mouseup', (e) => 
{
    playerTurret.isShooting = false;
    mouseDown = false;
});


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