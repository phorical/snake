var tick = function() {
    snake.pop();
    paintCanvas();
}

setInterval(tick, 100);