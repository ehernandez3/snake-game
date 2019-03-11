"use strict";

/** CONSTANTS **/
const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';
const SNAKE_COLOR = 'lightgreen';
const SNAKE_BORDER_COLOR = 'darkgreen';


/** Snake made up of an array of objects.
* Each object contains a set of coordinates
* that represent a part of the snake.
*/
 let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150}
    ];


// Get canvas element
let gameCanvas = document.getElementById("gameCanvas");

// Return two dimensional drawing context
let context = gameCanvas.getContext("2d");

// Select canvas color
context.fillStyle = CANVAS_BACKGROUND_COLOR;

// Select canvas border color
context.strokeStyle = CANVAS_BORDER_COLOR;

// Draw a "filled" rectangle to cover the entire canvas
context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

// Draw a "border" around the entire canvas
context.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

/**
 * Draws part of snake on canvas
 * @param snakePart - Coordinates where part should be drawn
 */
function drawSnakePart(snakePart) {
    // Set snake color
    context.fillStyle = SNAKE_COLOR;

    // Set snake border color
    context.strokeStyle = SNAKE_BORDER_COLOR;

    // Draws and fills rectangle representing a part of the snake
    // at whatever coordinates are passed
    context.fillRect(snakePart.x, snakePart.y, 10, 10);

    // Draws border around snake part at whatever coordinates are
    // passed
    context.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

/**
 * Draws entire snake on canvas
 */
function drawSnake() {
    // Loops through snake parts drawing each part to canvas
    snake.forEach(drawSnakePart)
}

drawSnake();