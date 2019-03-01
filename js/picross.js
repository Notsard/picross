const LINE_NUMBER = 6;
const SQUARE_PER_LINE = 6;
const SQUARE_WIDTH = 50;
const SQUARE_HEIGHT = 50;
const SQUARE_MARGIN = 1;
const SQUARE_COLORS = ["blue"];
const SQUARE_CLICK = ["black"];
const ROWS = [[1],[2],[2],[3],[2]];
const COLUMNS = [[0],[1],[5],[4],[0]];
const TEXT_COL = [50, 100, 150, 200, 250];
const TEXT_ROW = [100, 150, 200, 250, 300];




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

function rowText(ctx) {
   for (var i=0; i<5; i++) {
   
    ctx.font = "25px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText(ROWS[i], 0, TEXT_ROW[i] ); 
}

}

function colText(ctx) {
    for (var i=0; i<7; i++) {
    
     ctx.font = "25px Arial";
     ctx.fillStyle = 'white';
     ctx.fillText(COLUMNS[i], TEXT_COL[i] +(SQUARE_MARGIN + i), SQUARE_HEIGHT); 
 }
 
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
rowText(context);

colText(context);

}, );
