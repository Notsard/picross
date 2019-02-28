const LINE_NUMBER = 6;
const SQUARE_PER_LINE = 6;
const SQUARE_WIDTH = 50;
const SQUARE_HEIGHT = 50;
const SQUARE_MARGIN = 1;
const SQUARE_COLORS = ["blue"];
const SQUARE_CLICK = ["black"];



function getCanva()
{
    return document.getElementById('canvasElem');
}

//
function getContext() {
    //
    var elem = getCanva();

   
    //
    return elem.getContext('2d');
}

//




function squaresInit() {
  //
  squareArray = new Array(LINE_NUMBER);

  for(var i = 0; i < LINE_NUMBER; i++) {
      //
      squareArray[i] = new Array(SQUARE_PER_LINE);

      //
      for(var j = 0; j < SQUARE_PER_LINE; j++) {
          //
          squareArray[i][j] = 1;
      }
  }
}

function squaresDisplay(ctx) {
  
  for(var i = 0; i < squareArray.length; i++) {
      ctx.fillStyle = SQUARE_COLORS[i];
      
      //
      for(var j = 0; j < squareArray[i].length; j++) {
          if(squareArray[i][j] == 1) {
              ctx.fillRect(
                  j * (SQUARE_WIDTH + SQUARE_MARGIN),
                  i * (SQUARE_HEIGHT + SQUARE_MARGIN),
                  SQUARE_WIDTH,SQUARE_HEIGHT);
          }
      }
  }
}
function gridClick(event){
    // on récupère le canva
    elem = getCanva();

    // On récupère les coordonnées du canva
    var rect = elem.getBoundingClientRect();


    // Les coordonnées de l'event - les coordonnées du canvas
    // On divise par la taille du carré
    console.log(parseInt((event.clientX - rect.left) / SQUARE_WIDTH) * SQUARE_WIDTH);
    console.log(parseInt((event.clientY - rect.left)/ SQUARE_WIDTH)* SQUARE_WIDTH);
    // ctx.setFillColor = "#000000";
}

function squareText(ctx) {
    ctx.font = "25px Arial";
    ctx.strokeText('1', 25,100);
    ctx.strokeText('2', 25,150);
    ctx.strokeText('2', 25,200);
    ctx.strokeText('3', 25,250);
    ctx.strokeText('2', 25,300);
    ctx.strokeText('0', 75,25);
    ctx.strokeText('1', 125,25);
    ctx.strokeText('5', 175,25);
    ctx.strokeText('4', 225,25);
    ctx.strokeText('0', 275,25);

}


window.addEventListener('load', function () {
  //
  context = getContext();

  elem = getCanva();

  elem.addEventListener('click', gridClick);
 

  //
  squaresInit(context);

  //
  squaresDisplay(context);

  //
squareText(context);

}, );
