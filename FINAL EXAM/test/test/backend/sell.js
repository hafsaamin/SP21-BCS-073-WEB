const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const path = require('path');


const multer = require('multer');
// const fs = require('fs').promises;
const mongoose = require('mongoose');
const WebSocket = require('ws');


mongoose.connect('mongodb://localhost:27017/ArtisticUnleashed', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const port = 1000;

app.use(express.static('public'));

const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
const wss = new WebSocket.Server({ server });


wss.on('connection', (ws) => {
    // Send the latest element to the connected client when they join
    sendLatestElement(ws);
});

const ImageModel = mongoose.model('Image', {
    filename: String,
    createdAt: { type: Date, default: Date.now },
});

async function fetchLatestElement() {
    try {
        return await ImageModel.findOne().sort({ createdAt: -1 });
    } catch (error) {
        console.error('Error fetching latest element:', error);
        throw error;
    }
}

function sendLatestElement(ws) {
    fetchLatestElement()
        .then((latestElement) => {
            ws.send(JSON.stringify({ latestElement }));
        })
        .catch((error) => {
            console.error('Error sending latest element:', error);
        });
}