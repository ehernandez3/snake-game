"use strict";

/** CONSTANTS **/
const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';
const SNAKE_COLOR = 'lightgreen';
const SNAKE_BORDER_COLOR = 'darkgreen';

// Get canvas element
let gameCanvas = document.getElementById("gameCanvas");

// Return two dimensional drawing context
let context = gameCanvas.getContext("2d");

let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150}
    ];

// Select canvas color
context.fillStyle = CANVAS_BACKGROUND_COLOR;

// Select canvas border color
context.strokeStyle = CANVAS_BORDER_COLOR;

// Draw a "filled" rectangle to cover the entire canvas
context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

// Draw a "border" around the entire canvas
context.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

function drawSnakePart(snakePart) {
    context.fillStyle = SNAKE_COLOR;
    context.strokeStyle = SNAKE_BORDER_COLOR;

    context.fillRect(snakePart.x, snakePart.y, 10, 10);
    context.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart)
}

drawSnake();