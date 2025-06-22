const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Canvas data storage (in memory - for production, use a database)
const canvasData = {
    width: 1000,
    height: 1000,
    pixels: new Map() // Store pixels as "x,y" -> color
};

// User cooldown tracking
const userCooldowns = new Map();

// Initialize canvas with white background
function initializeCanvas() {
    for (let x = 0; x < canvasData.width; x++) {
        for (let y = 0; y < canvasData.height; y++) {
            canvasData.pixels.set(`${x},${y}`, '#FFFFFF');
        }
    }
}

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Send current canvas state to new user
    socket.emit('canvasState', {
        width: canvasData.width,
        height: canvasData.height,
        pixels: Object.fromEntries(canvasData.pixels)
    });

    // Handle pixel placement
    socket.on('placePixel', (data) => {
        const { x, y, color } = data;
        
        // Validate coordinates
        if (x < 0 || x >= canvasData.width || y < 0 || y >= canvasData.height) {
            socket.emit('error', 'Invalid coordinates');
            return;
        }

        // Check cooldown
        const now = Date.now();
        const lastPixelTime = userCooldowns.get(socket.id) || 0;
        const cooldownTime = 30000; // 30 seconds

        if (now - lastPixelTime < cooldownTime) {
            const remainingTime = Math.ceil((cooldownTime - (now - lastPixelTime)) / 1000);
            socket.emit('cooldownError', `Please wait ${remainingTime} seconds before placing another pixel`);
            return;
        }

        // Update canvas
        canvasData.pixels.set(`${x},${y}`, color);
        userCooldowns.set(socket.id, now);

        // Broadcast to all other users
        socket.broadcast.emit('pixelPlaced', { x, y, color });
        
        // Confirm to the user
        socket.emit('pixelConfirmed', { x, y, color });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        userCooldowns.delete(socket.id);
    });
});

// API endpoints
app.get('/api/canvas', (req, res) => {
    res.json({
        width: canvasData.width,
        height: canvasData.height,
        pixels: Object.fromEntries(canvasData.pixels)
    });
});

app.get('/api/stats', (req, res) => {
    res.json({
        connectedUsers: io.engine.clientsCount,
        totalPixels: canvasData.pixels.size,
        canvasSize: `${canvasData.width}x${canvasData.height}`
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Initialize canvas on startup
initializeCanvas();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to access the application`);
}); 