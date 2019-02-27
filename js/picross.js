
const LINE_NUMBER = 10;
const SQUARE_PER_LINE = 10;

function draw() {
  

var c = document.getElementById('canvas1');
var ctx = c.getContext("2d");

// (1) Carré 250x250
ctx.beginPath();      
ctx.moveTo(50,50);   
ctx.lineTo(250,50);  
ctx.lineTo(250, 250);      
ctx.lineTo(50, 250);      
ctx.lineTo(50, 50); 
ctx.fillStyle = "darkblue";
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();      // (2) Carré 250x250
ctx.moveTo(250, 50);   
ctx.lineTo(450, 50);  
ctx.lineTo(450, 250);  
ctx.lineTo(250, 250); 
ctx.lineTo(250, 50);
ctx.fillStyle = "darkblue";
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();      // (3) Carré 250x250
ctx.moveTo(250, 250);   
ctx.lineTo(250,450);  
ctx.lineTo(450, 450);
ctx.lineTo(450, 250);
ctx.lineTo(50, 250);
ctx.fillStyle = "darkblue";
ctx.fill();   
ctx.stroke();    
ctx.closePath();

ctx.beginPath();      // (4) Carré 250x250
ctx.moveTo(50, 250);   
ctx.lineTo(50,450);  
ctx.lineTo(250,450); 
ctx.lineTo(250, 250);
ctx.lineTo(50, 250);
ctx.fillStyle = "darkblue";
ctx.fill();
ctx.stroke();
ctx.closePath(); }

function square() {
    var c = document.getElementById('canvas1');
var ctx = c.getContext("2d");

ctx.beginPath();      // Petit carré
ctx.moveTo(50, 50);   
ctx.lineTo(100,50);  
ctx.lineTo(100,100);  
ctx.lineTo(50, 100);  
ctx.lineTo(50,50);  
ctx.stroke();        
ctx.closePath();
  }

  function rectangle() {
    var c = document.getElementById('canvas1');
var ctx = c.getContext("2d");
    
    ctx.beginPath();      
    ctx.moveTo(460, 0);   
    ctx.lineTo(460, 550);
    ctx.lineTo(700, 550);
    ctx.lineTo(700, 0);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

  }

window.addEventListener('load', function() {
    draw(),
    square(),
    rectangle()
});




        

