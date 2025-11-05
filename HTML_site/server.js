const express = require('express');
const path = require('path');

const app = express();

// Middleware for static files with proper MIME types
app.use(express.static(path.join(__dirname), {
    setHeaders: (res, filePath) => {
        // Set proper MIME types for Unity files
        if (filePath.endsWith('.wasm')) {
            res.setHeader('Content-Type', 'application/wasm');
        } else if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        } else if (filePath.endsWith('.br')) {
            // Brotli compressed files
            res.setHeader('Content-Encoding', 'br');
            if (filePath.endsWith('.wasm.br')) {
                res.setHeader('Content-Type', 'application/wasm');
            } else if (filePath.endsWith('.js.br')) {
                res.setHeader('Content-Type', 'application/javascript');
            } else if (filePath.endsWith('.data.br')) {
                res.setHeader('Content-Type', 'application/octet-stream');
            }
        }
    }
}));

// Serve the main page
app.get('/', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve game page
app.get('/game.html', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.sendFile(path.join(__dirname, 'game.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to access the application`);
});
