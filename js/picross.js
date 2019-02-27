const LINE_NUMBER = 10;
const SQUARE_PER_LINE = 10;
const SQUARE_WIDTH = 50;
const SQUARE_HEIGHT = 50;
const SQUARE_MARGIN = 2;
const SQUARE_COLORS = ["blue"];



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



window.addEventListener('load', function () {
  //
  context = getContext();
 

  //
  squaresInit(context);

  //
  squaresDisplay(context);

  //
 

}, );
