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
        console.log("Snake head out of left bounds");
        return true;
    } else if (snake[0][0] >= canvasWidth) {
        console.log("Snake head out of right bounds");
        return true;
    } else if (snake[0][1] < 0) {
        console.log("Snake head out of upper bounds");
        return true;
    } else if (snake[0][1] >= canvasHeight) {
        console.log("Snake head out of lower bounds");
        return true;
    }
    return false;
}

var isSnakeHeadOnSnakeBody = function () {
    for (var i = 1; i < snake.length; i++) {
        if (snake[0][0] === snake[i][0] && snake[0][1] === snake[i][1]) {
            console.log("Snake head on body");
            return true;
        }
    }
    return false;
}

var isSnakeHeadOnFood = function () {
    var snakeHeadOnFood = snake[0][0] === food[0] && snake[0][1] === food[1];
    if (snakeHeadOnFood) {
        console.log("Snake head on food");
    }
    return snakeHeadOnFood;
}

//This is a utility used when creating a new food item - checks if new food is on current snake body
var isFoodOnSnake = function () {
    for (var i = 0; i < snake.length; i++) {
        if (food[0] === snake[i][0] && food[1] === snake[i][1]) {
            console.log("Snake head on food");
            return true;
        }
    }
    return false;
}

var createNewFood = function () {
    do {
        food[0] = Math.floor(Math.random() * canvasWidth / snakeSize) * snakeSize;
        food[1] = Math.floor(Math.random() * canvasHeight / snakeSize) * snakeSize;
    } while (isFoodOnSnake());
}

var tick = function () {
    //    direction = randomChoiceFromArray([ "up", "down", "left", "right"]);
    direction = nextDirection;
    moveSnakeOneCell();
    if (isSnakeHeadOutsideBounds() || isSnakeHeadOnSnakeBody()) {
        gameInterval = clearInterval(gameInterval);
    }
    if (isSnakeHeadOnFood()) {
        createNewFood();
    } else {
        snake.pop();
    }
    paintCanvas();
}

document.onkeydown = function (event) {
    var key = event.key;
    // I want the following behavior:
    //      snake going down
    //      [tick, right, down, tick]
    //      snake going down
    // Instead of:
    //      snake going down
    //      [tick, right, down, tick]
    //      snake going right
    // which would happen if the direction value was instantly set
    // Instant-set direction also allows the following bug:
    //      snake going down
    //      [tick, right, up, tick]
    //      snake going up into itself
    if (key === "ArrowDown" && direction !== "up") {
        nextDirection = "down";
        console.log("down");
    } else if (key === "ArrowUp" && direction != "down") {
        nextDirection = "up";
        console.log("up");
    } else if (key === "ArrowLeft" && direction != "right") {
        nextDirection = "left";
        console.log("left");
    } else if (key === "ArrowRight" && direction != "left") {
        nextDirection = "right";
        console.log("right");
    }

}

gameInterval = setInterval(tick, 2000);