//Brady Hahn
//2019-12-10

function createSnakeCell(cellsFromLeft, cellsFromTop) {
    return ([snakeSize * cellsFromLeft, snakeSize * cellsFromTop]);
}



function fillSnakeCell(cellPart1, cellPart2) {
    if (typeof cellPart2 === 'undefined') {
        if (Array.isArray(cellPart1) && cellPart1.length === 2) {
            cellPart2 = cellPart1[1];
            cellPart1 = cellPart1[0];
        }
    }
    if (typeof cellPart1 === 'number' && typeof cellPart2 === 'number') {
        snakeContext.fillStyle = color1;
        snakeContext.fillRect(cellPart1 + 1, cellPart2 + 1, snakeSize - 2, snakeSize - 2);
        snakeContext.fillStyle = color2;
        snakeContext.fillRect(cellPart1 + 3, cellPart2 + 3, snakeSize - 6, snakeSize - 6);
    } else {
        throw Error("snakeCell cannot be filled; Error locating cell location");
    }
}

//todo: randomize the snake starting position
function createSnake(start, size) {
    if (!Array.isArray(start) || start.length != 2) {
        throw Error("Start cell is not a touple");
    }
}
//create the snake
snake = [createSnakeCell(5, 2), createSnakeCell(4, 2), createSnakeCell(3, 2), createSnakeCell(3, 1), createSnakeCell(3, 0)];

for (var i = 0; i < snake.length; i++) {
    fillSnakeCell(snake[i]);
}