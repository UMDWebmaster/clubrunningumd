const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;
const RACES_FILE = path.join(__dirname, 'public/races-data.json');

app.use(cors());
app.use(express.json());

// Get races data
app.get('/api/races', (req, res) => {
  try {
    const data = fs.readFileSync(RACES_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading races file:', error);
    res.status(500).json({ error: 'Failed to read races data' });
  }
});

// Save races data
app.post('/api/races', (req, res) => {
  try {
    const data = req.body;
    fs.writeFileSync(RACES_FILE, JSON.stringify(data, null, 2));
    
    // Trigger update event for connected clients
    emitUpdate(data);
    
    res.json({ success: true, message: 'Races saved successfully' });
  } catch (error) {
    console.error('Error saving races file:', error);
    res.status(500).json({ error: 'Failed to save races data' });
  }
});

// SSE endpoint for real-time updates
app.get('/api/races-updates', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  });

  const sendUpdate = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Store the connection for updates
  addClient(sendUpdate);

  // Send current data immediately
  try {
    const currentData = JSON.parse(fs.readFileSync(RACES_FILE, 'utf8'));
    sendUpdate(currentData);
  } catch (error) {
    console.error('Error reading current races data:', error);
  }

  // Clean up on disconnect
  req.on('close', () => {
    removeClient(sendUpdate);
  });
});

let clients = [];

const addClient = (client) => {
  clients.push(client);
};

const removeClient = (client) => {
  clients = clients.filter(c => c !== client);
};

const emitUpdate = (data) => {
  clients.forEach(client => {
    try {
      client(data);
    } catch (error) {
      console.error('Error sending update to client:', error);
    }
  });
};

app.listen(PORT, () => {
  console.log(`Races API server running on http://localhost:${PORT}`);
});