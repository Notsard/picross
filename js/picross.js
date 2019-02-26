var monCanvas=document.getElementById("canvas1");
var ctx = monCanvas.getContext("2d");
ctx.lineWidth="8";
ctx.strokeStyle="#FF0000";

ctx.beginPath(test); /* Dessiner le carré*/
ctx.moveTo(0, 0);
ctx.lineTo(0, 20);
ctx.lineTo(20, 20);
ctx.lineTo(20, 0);
ctx.lineTo(0,0);
ctx.stroke();
ctx.closePath();
