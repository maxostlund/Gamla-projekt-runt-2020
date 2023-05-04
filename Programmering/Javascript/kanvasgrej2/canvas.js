// Några grundläggande inställningar
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; 
canvas.height = 0.8*window.innerHeight; 

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
var c = canvas.getContext('2d');

// Blå kvadrat
c.fillStyle = "Chartreuse" 
c.fillRect(550, 150, 50, 50);

// Röd kvadrat
c.save(); // Miljön ska roteras, men det tidigare sparas
c.rotate(Math.PI / 10); // Roterar den lite, vinken given i radianer
c.fillStyle = "aquamarine"
c.fillRect(canvas.width / 2, canvas.height / 2 - 120, 75, 75);
c.restore() // Miljön återställs efter rotationen

// Gul cirkel
c.fillStyle = 'yellow';
c.beginPath();
c.arc(275, 200-35, 35, 0, 2*Math.PI, true); // En cirkel är en "arc" som går mellan 0 och 2pi
c.closePath();
c.fill();


// Nedanstående kod ritar triangeln
c.beginPath();
c.moveTo(0,0);
c.lineTo(200, 250)
c.lineTo(820, 370);
c.lineTo(900,450);
c.lineTo(0, 0);
c.lineWidth = 5;
c.strokeStyle = "blue"
c.fillStyle = "black"
c.stroke();
c.fill();
c.closePath();

// Anrop av funktionen som ritar ringarna
rings();

// Texten "Figures"
c.save();
c.rotate(-Math.PI/24);
c.fillStyle = "black";
c.font = "120px Comic Sans MS";
c.textAlign = "center";
c.fillText("Figures", canvas.width / 2, 200);
c.restore();

// Funktion som ritar ringarna
function rings() {
    let n = 60; // Antal prickar som varje ring består av 
    let circle_r = 5; // Storleken på prickarna
    let dr = 35; // Avståndet mellan ringarna
    let r0 = 25; // Den innersta ringens radie
    let x0 = canvas.width / 2; // Mitten på sidan i x-led
    let y0 = canvas.height /2; // Mitten på sidan i y-led
    var colors = ["yellow", "blue", "red"]; 
    for(var i=1; i<=9; i++){ // Loop som ritar respektve ring
        
        for(var j=1; j<=n; j++) { // Loop som ritar prickarna
            
            let r = r0 + dr*i; // Ringarnas radie ökar
            let x = x0 + r*Math.cos(2*Math.PI*j/n); // Läget i x-led för en prick
            let y = y0 + r*Math.sin(2*Math.PI*j/n); // Läget i y-led för en prick
            // c.moveTo(x0, y0); /* Verkar inte behövas...*/
            c.beginPath(); // En prick är en liten cirkel
            c.rect(x, y, 30,);
             c.fillStyle = colors[j%3]; // Färgen bestäms
            c.closePath();
            c.fill(); // Pricken ritas ut 
        }
    }  
}