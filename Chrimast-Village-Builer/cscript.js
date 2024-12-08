const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;  // Initial horizontal position of the square
const y = canvas.height / 2 - 25;  // Vertical position of the square (centered)
const size = 50;  // Size of the square
const speed = 5;  // Speed at which the square moves

function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the red square
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, size, size);

    // Move the square horizontally
    x += speed;

    // Reset the square position when it moves off the screen
    if (x > canvas.width) {
        x = -size;
    }

    // Request the next animation frame
    requestAnimationFrame(draw);
}

// Start the animation
draw();
