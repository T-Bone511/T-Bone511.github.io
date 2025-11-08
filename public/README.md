# Collaborative Pixel Art

A real-time collaborative pixel art canvas similar to r/place, built with Node.js, Socket.IO, and HTML5 Canvas.

## Features

- **1000x1000 pixel canvas** - Large collaborative space
- **Real-time collaboration** - See other users' pixels instantly
- **30-second cooldown** - Prevents spam and ensures fair play
- **20 color palette** - Wide variety of colors to choose from
- **Live user count** - See how many people are currently connected
- **Responsive design** - Works on desktop and mobile devices

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Access the application:**
   - Open your browser and go to `http://localhost:3000`
   - Use any username and password `art` to access the pixel art page
   - Or use password `letmein` to access the portfolio page

## How to Use

1. **Login:** Enter any username and use password `art`
2. **Select a color:** Click on any color from the palette
3. **Place pixels:** Click anywhere on the canvas to place a pixel
4. **Wait for cooldown:** You can only place one pixel every 30 seconds
5. **Collaborate:** See other users' pixels appear in real-time

## Technical Details

### Frontend
- **HTML5 Canvas** for pixel rendering
- **Socket.IO client** for real-time communication
- **CSS Grid** for responsive color palette
- **JavaScript** for interactivity and state management

### Backend
- **Node.js** with Express server
- **Socket.IO** for WebSocket connections
- **In-memory storage** for canvas data (resets on server restart)
- **User cooldown tracking** to prevent spam

### File Structure
```
HTML_site/
├── index.html          # Login page
├── pixel-art.html      # Collaborative canvas page
├── portfolio.html      # Portfolio page
├── style.css          # Shared styles
├── server.js          # Node.js server
├── package.json       # Dependencies
└── README.md          # This file
```

## API Endpoints

- `GET /` - Serves the main login page
- `GET /api/canvas` - Returns current canvas state
- `GET /api/stats` - Returns connection statistics

## Socket.IO Events

### Client to Server
- `placePixel` - Send pixel placement data

### Server to Client
- `canvasState` - Initial canvas data
- `pixelPlaced` - New pixel from another user
- `pixelConfirmed` - Confirmation of successful pixel placement
- `cooldownError` - Cooldown violation message
- `error` - General error messages

## Customization

### Changing Canvas Size
Edit the `canvasData` object in `server.js`:
```javascript
const canvasData = {
    width: 1000,  // Change this
    height: 1000, // Change this
    pixels: new Map()
};
```

### Changing Cooldown Time
Edit the `cooldownTime` variable in `server.js`:
```javascript
const cooldownTime = 30000; // 30 seconds in milliseconds
```

### Adding Colors
Edit the `COLORS` array in `pixel-art.html`:
```javascript
const COLORS = [
    '#FF0000', '#FF4500', // Add your colors here
    // ... existing colors
];
```

## Production Deployment

For production deployment, consider:

1. **Database storage** - Replace in-memory storage with Redis or MongoDB
2. **Load balancing** - Use multiple server instances
3. **Rate limiting** - Implement additional anti-spam measures
4. **HTTPS** - Secure WebSocket connections
5. **Monitoring** - Add logging and analytics

## Troubleshooting

### Common Issues

1. **"Module not found" errors:**
   - Run `npm install` to install dependencies

2. **Canvas not loading:**
   - Check browser console for errors
   - Ensure server is running on port 3000

3. **Pixels not appearing:**
   - Check WebSocket connection status
   - Verify server is running and accessible

4. **Port already in use:**
   - Change the port in `server.js` or kill the process using port 3000

## License

MIT License - feel free to modify and distribute as needed. 