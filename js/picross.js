const LINE_NUMBER = 6;
const SQUARE_PER_LINE = 6;
const SQUARE_WIDTH = 50;
const SQUARE_HEIGHT = 50;
const SQUARE_MARGIN = 1;
const SQUARE_COLORS = ["blue"];
const SQUARE_CLICK = ["black"];
const ROWS = [
    [1],
    [2],
    [2],
    [3],
    [2]
];
const COLUMNS = [
    [0],
    [1],
    [5],
    [4],
    [0]
];
const TEXT_COL = [50, 100, 150, 200, 250];
const TEXT_ROW = [100, 150, 200, 250, 300];
var tabl = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 1, 0]
];
var tableauCanvas = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

function getCanva() {
    return document.getElementById('canvasElem');
}

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

    for (var i = 0; i < LINE_NUMBER; i++) {
        //
        squareArray[i] = new Array(SQUARE_PER_LINE);

        //
        for (var j = 0; j < SQUARE_PER_LINE; j++) {
            //
            squareArray[i][j] = 1;
        }
    }
}

function squaresDisplay(ctx) {

    for (var i = 0; i < squareArray.length; i++) {
        ctx.fillStyle = SQUARE_COLORS[i];

        //
        for (var j = 0; j < squareArray[i].length; j++) {
            if (squareArray[i][j] == 1) {
                ctx.fillRect(
                    j * (SQUARE_WIDTH + SQUARE_MARGIN),
                    i * (SQUARE_HEIGHT + SQUARE_MARGIN),
                    SQUARE_WIDTH, SQUARE_HEIGHT);
            }
        }
    }
}

function leftClick(event) {
    // on récupère le canva
    elem = getCanva();

    // On récupère les coordonnées du canva
    var rect = elem.getBoundingClientRect();


    // Les coordonnées de l'event - les coordonnées du canvas
    // On divise par la taille du carré
    x = parseInt((event.clientX - rect.left) / (SQUARE_WIDTH + SQUARE_MARGIN)) * (SQUARE_WIDTH + SQUARE_MARGIN);
    y = parseInt((event.clientY - rect.top) / (SQUARE_HEIGHT + SQUARE_MARGIN)) * (SQUARE_HEIGHT + SQUARE_MARGIN);
    var canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext("2d");
    if (x == 0 || y == 0) {
        return;
    } else {
        ctx.fillStyle = "black";
        ctx.fillRect(x / SQUARE_MARGIN, y / SQUARE_MARGIN, 50, 50);

    }
    let row = y / 51 - 1;
    let col = x / 51 - 1

     tableauCanvas [row][col] = 1;

    console.log(tableauCanvas);
}

function rightClick(event) {
    elem = getCanva();

    // On récupère les coordonnées du canva
    var rect = elem.getBoundingClientRect();


    // Les coordonnées de l'event - les coordonnées du canvas
    // On divise par la taille du carré
    x = parseInt((event.clientX - rect.left) / (SQUARE_WIDTH + SQUARE_MARGIN)) * (SQUARE_WIDTH + SQUARE_MARGIN);
    y = parseInt((event.clientY - rect.top) / (SQUARE_HEIGHT + SQUARE_MARGIN)) * (SQUARE_HEIGHT + SQUARE_MARGIN);
    var canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext("2d");
    if (x == 0 || y == 0) {
        return;
    } else {
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, 50, 50);

    }
    let row = y / 51 - 1;
    let col = x / 51 - 1;
    
    tableauCanvas [row][col] = 0;
    console.log(tableauCanvas);
}

function juste() {
   if(tableauCanvas.join() == tabl.join()){
       alert("C'est gagné");
   }else{
       alert("dommage c'est perdu");
   }
}
nvas [row][col] = 0;

function rowText(ctx) {
    for (var i = 0; i < 5; i++) {

        ctx.font = "25px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(ROWS[i], 0, TEXT_ROW[i]);
    }

}

function colText(ctx) {
    for (var i = 0; i < 7; i++) {

        ctx.font = "25px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(COLUMNS[i], TEXT_COL[i] + (SQUARE_MARGIN + i), SQUARE_HEIGHT);
    }

}


document.oncontextmenu = new Function("return false");nvas [row][col] = 0;

window.addEventListener('load', function () {
    //
    context = getContext();

    elem = getCanva();
    elem.addEventListener('click', leftClick);
    elem.addEventListener("contextmenu", rightClick);


    //
    squaresInit(context);

    //
    squaresDisplay(context);

    //
    rowText(context);

    colText(context);

}, );