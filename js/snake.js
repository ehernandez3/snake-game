"use strict";

/** CONSTANTS **/
const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';

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