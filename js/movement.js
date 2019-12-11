var moveSnakeOneCell = function () {

    if (direction === "up") {
        snake.unshift(createCell(snake[0][0] / snakeSize, snake[0][1] / snakeSize - 1));
    } else if (direction === "down") {
        snake.unshift(createCell(snake[0][0] / snakeSize, snake[0][1] / snakeSize + 1));
    } else if (direction === "left") {
        snake.unshift(createCell(snake[0][0] / snakeSize - 1, snake[0][1] / snakeSize));
    } else if (direction === "right") {
        snake.unshift(createCell(snake[0][0] / snakeSize + 1, snake[0][1] / snakeSize));
    } else {
        throw Error("Snake has no direction, swaying in the wind");
    }
}

var isSnakeHeadOutsideBounds = function () {
    if (snake[0][0] < 0) {
        return true;
    } else if (snake[0][0] >= canvasWidth) {
        return true;
    } else if (snake[0][1] < 0) {
        return true;
    } else if (snake[0][1] >= canvasHeight) {
        return true;
    }
    return false;
}

var isSnakeHeadOnFood = function () {
    return (snake[0][0] === food[0] && snake[0][1] === food[1]);
}

var tick = function () {
    direction = randomChoiceFromArray([ /*"up", "down", "left", */ "right"]);
    moveSnakeOneCell();
    if (isSnakeHeadOutsideBounds()) {
        gameInterval = clearInterval(gameInterval);
    }
    if (isSnakeHeadOnFood()) {
        createNewFood();
    } else {
        snake.pop();
    }
    paintCanvas();
}

gameInterval = setInterval(tick, 100);