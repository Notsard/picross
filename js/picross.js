const LINE_NUMBER = 10;
const SQUARE_PER_LINE = 10;
const SQUARE_WIDTH = 10;
const SQUARE_HEIGHT = 10;
const SQUARE_COLORS = "#503A22";
const COLUMNS = [[0],[1],[5],[4],[0]];
const ROWS = [[1],[2],[2],[3],[2]]; 


var gameWidth = 400;
var gameHeight = 300;
var session;
var quareArray;
var name = "Titanic"



window.addEventListener('load', function () {
    //
    context = getContext();
    if(!context) {
        return;
    }

    //
    gameInit();

    //

    //
    session = setInterval(refreshGame, 10);

    //
    window.document.onkeydown = ???;

}, false);



function getCanva() 
        {
            return document.getElementById('canvasElem');
        }

        function getContext() {
         
         var elem = getCanva();
         if(!elem || !elem.getContext) {
            return;
        }

        // 2d
        return elem.getContext('2d');
    }

    function bricksInit(ctx) {
        // Initialise les briques avec les attributs spécifiés
        brickArray = new Array(LINE_NUMBER);

        for(var i = 0; i < LINE_NUMBER; i++) {
            //0+1 0+2... 0+4   (car 5lignes)
            brickArray[i] = new Array(BRICK_PER_LINE);

            //Nombre de briques par ligne
            for(var j = 0; j < BRICK_PER_LINE; j++) {
                //0+1 0+2... 0+7 (car 8briques par ligne)
                brickArray[i][j] = 1;
            }
        }
        
        return 1;
    }












     