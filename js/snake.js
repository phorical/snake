//Brady Hahn
//2019-12-10

var createCell = function (cellsFromLeft, cellsFromTop) {
    return ([snakeSize * cellsFromLeft, snakeSize * cellsFromTop]);
}

var paintCell = function (x, y, stroke, fill) {
    snakeContext.fillStyle = stroke;
    snakeContext.fillRect(x + 1, y + 1, snakeSize - 2, snakeSize - 2);
    snakeContext.fillStyle = fill;
    snakeContext.fillRect(x + 3, y + 3, snakeSize - 6, snakeSize - 6);
}

var paintSnakeCell = function (cellPart1, cellPart2) {
    if (typeof cellPart2 === 'undefined') {
        if (Array.isArray(cellPart1) && cellPart1.length === 2) {
            cellPart2 = cellPart1[1];
            cellPart1 = cellPart1[0];
        }
    }
    if (typeof cellPart1 === 'number' && typeof cellPart2 === 'number') {
        paintCell(cellPart1, cellPart2, colorSnakeStroke, colorSnakeFill);
    } else {
        throw Error("snakeCell cannot be filled; Error locating cell location");
    }
}

var paintFoodCell = function () {
    paintCell(food[0], food[1], colorFoodStroke, colorFoodFill);
}

//todo: randomize the snake starting position
var createSnake = function (start, size) {
    if (!Array.isArray(start) || start.length != 2) {
        throw Error("Start cell is not a touple");
    }
}
//create the snake
snake = [createCell(5, 2), createCell(4, 2), createCell(3, 2), createCell(3, 1), createCell(3, 0)];
food = createCell(0, 0);

//fill the snake
var paintCanvas = function () {
    //paint the background
    snakeContext.fillStyle = colorBackground;
    snakeContext.fillRect(0, 0, canvasWidth, canvasHeight);

    //paint the food
    paintFoodCell();

    for (var i = 0; i < snake.length; i++) {
        paintSnakeCell(snake[i]);
    }
}
paintCanvas();