// script.js

// Get the canvas and context
const canvas = document.getElementById('knowledge-map');
const ctx = canvas.getContext('2d');

// Set up pixel size for the grid
const pixelSize = 10;

// Function to draw a rectangle (as a collection of pixels)
function drawRectangle(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * pixelSize, y * pixelSize, width * pixelSize, height * pixelSize);
}

// Function to draw text
function drawText(text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '8px "Press Start 2P"';
  ctx.fillText(text, x * pixelSize, y * pixelSize);
}

// // Draw the knowledge map
// function drawKnowledgeMap() {
//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Example: Draw areas representing knowledge domains
//   // Programming
//   drawRectangle(5, 5, 15, 10, '#ff5733'); // Orange rectangle
//   drawText('Programming', 6, 10, '#fff');

//   // Algorithms
//   drawRectangle(25, 5, 15, 10, '#33ff57'); // Green rectangle
//   drawText('Algorithms', 26, 10, '#fff');

//   // Data Structures
//   drawRectangle(15, 20, 15, 10, '#3357ff'); // Blue rectangle
//   drawText('Data Structures', 16, 25, '#fff');

//   // Connect the areas with lines
//   ctx.strokeStyle = '#fff';
//   ctx.lineWidth = 2;

//   // Draw lines
//   ctx.beginPath();
//   ctx.moveTo(12.5 * pixelSize, 15 * pixelSize); // Programming bottom center
//   ctx.lineTo(22.5 * pixelSize, 25 * pixelSize); // Data Structures top center
//   ctx.lineTo(32.5 * pixelSize, 15 * pixelSize); // Algorithms bottom center
//   ctx.stroke();
// }



// Define knowledge areas with positions and sizes
const knowledgeAreas = [
    {
      name: 'Programming',
      x: 5,
      y: 5,
      width: 15,
      height: 10,
      color: '#ff5733',
      info: 'Experience with C++, Python, and JavaScript.',
    },
    {
      name: 'Algorithms',
      x: 25,
      y: 5,
      width: 15,
      height: 10,
      color: '#00AA00',
      info: 'Knowledge of sorting, searching, and optimization algorithms.',
    },
    {
      name: 'Data Structures',
      x: 15,
      y: 20,
      width: 15,
      height: 10,
      color: '#3357ff',
      info: 'Familiar with trees, graphs, and hash tables.',
    },
  ];
  
  // Update drawKnowledgeMap to use the knowledgeAreas array
  function drawKnowledgeMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw each knowledge area
    knowledgeAreas.forEach(area => {
      drawRectangle(area.x, area.y, area.width, area.height, area.color);
      drawText(area.name, area.x + 1, area.y + area.height / 2, '#fff');
    });
  
    // Draw connections (same as before)
    // ... (omit for brevity)
      // Connect the areas with lines
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;

  // Draw lines
  ctx.beginPath();
  ctx.moveTo(12.5 * pixelSize, 15 * pixelSize); // Programming bottom center
  ctx.lineTo(22.5 * pixelSize, 25 * pixelSize); // Data Structures top center
  ctx.lineTo(32.5 * pixelSize, 15 * pixelSize); // Algorithms bottom center
  ctx.stroke();
  }
  
  // Event listener for clicks
  canvas.addEventListener('click', function (event) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / pixelSize);
    const y = Math.floor((event.clientY - rect.top) / pixelSize);
  
    // Check if the click is inside any knowledge area
    knowledgeAreas.forEach(area => {
      if (
        x >= area.x &&
        x <= area.x + area.width &&
        y >= area.y &&
        y <= area.y + area.height
      ) {
        alert(`${area.name}:\n${area.info}`);
      }
    });
  });
  

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawKnowledgeMap();
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas(); // Initial call
  

// Call the function to draw the map
//drawKnowledgeMap();

