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

// Horizontal velocity
let dx = 10;
// Vertical velocity
let dy = 0;


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


// Move one step right
advanceSnake();
// Change vertical velocity to 0
dx = 0;
// Change horizontal velocity to -10
dy = -10;
// Move one step up
advanceSnake();

drawSnake();

/**
 * Advances snake by changing the x-coordinates of its parts
 * according to the horizontal velocity and the y-coordinates of its parts
 * according to the vertical veolocity
 */
function advanceSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}

/**
 * Draws entire snake on canvas
 */
function drawSnake() {
    // Loops through snake parts drawing each part to canvas
    snake.forEach(drawSnakePart)
}

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