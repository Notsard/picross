


function draw() {
    var c = document.getElementById('canvas1');
var ctx = c.getContext("2d");

var c = document.getElementById('canvas1');
var ctx = c.getContext("2d");

// Voile du bateau
ctx.beginPath();      // Début du chemin
ctx.moveTo(50,50);   // Le tracé part du point 150,80
ctx.lineTo(250,50);  // Un segment est ajouté vers 300,230
ctx.lineTo(250, 250);      // Fermeture du chemin
ctx.lineTo(50, 250);      // Fermeture du chemin
ctx.lineTo(50, 50);      // Fermeture du chemin
ctx.stroke(); 
ctx.closePath();

ctx.beginPath();      // Début du chemin
ctx.moveTo(250, 50);   // Le tracé part du point 150,80
ctx.lineTo(450, 50);  // Un segment est ajouté vers 300,230
ctx.lineTo(450, 250);  // Un segment est ajouté vers 300,230
ctx.lineTo(250, 250);  // Un segment est ajouté vers 300,230
ctx.stroke();  
ctx.closePath();

ctx.beginPath();      // Début du chemin
ctx.moveTo(250, 250);   // Le tracé part du point 150,80
ctx.lineTo(250,450);  // Un segment est ajouté vers 300,230
ctx.lineTo(450, 450)
ctx.lineTo(450, 250)
ctx.stroke();        
ctx.closePath();

ctx.beginPath();      // Début du chemin
ctx.moveTo(50, 250);   // Le tracé part du point 150,80
ctx.lineTo(50,450);  // Un segment est ajouté vers 300,230
ctx.lineTo(250,450);  // Un segment est ajouté vers 300,230
ctx.stroke();        
ctx.closePath();



  }


window.addEventListener('load', function() {
    draw()
   
});




        

