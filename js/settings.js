//Brady Hahn
//2019-12-10
var snakeCanvas = document.getElementById('snakeCanvas');
var snakeContext = snakeCanvas.getContext('2d');
var colorSnakeStroke = "MediumOrchid";
var colorSnakeFill = "MediumSlateBlue";
var colorFoodStroke = "DarkGreen";
var colorFoodFill = "DarkOliveGreen";
var colorBackground = "Gainsboro";
var snake;
var food;
var snakeSize = 20;
//using maxSize so this can scale correctly... 
//want to use a 20 px snake all the time
//easter egg: resize your window during the game and the size will vary
var maxSize = 400;
var cellsPerSideOfCanvas = Math.floor(maxSize / snakeSize);
var canvasWidth = cellsPerSideOfCanvas * snakeSize;
var canvasHeight = canvasWidth;
snakeCanvas.setAttribute("width", canvasWidth);
snakeCanvas.setAttribute("height", canvasHeight);
var direction;
var nextDirection = "right";