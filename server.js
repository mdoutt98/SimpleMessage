const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to add a message
app.post('/add-message', (req, res) => {
    const message = req.body.message;
    if (message) {
        saveMessage(message);
        res.status(200).send('Message added successfully');
    } else {
        res.status(400).send('No message provided');
    }
});

// Endpoint to get messages
app.get('/get-messages', (req, res) => {
    const messages = getMessages();
    res.json(messages);
});

// Endpoint to clear messages via a GET request
app.get('/clear-messages', (req, res) => {
    clearMessages();
    res.send('Messages cleared');
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Helper functions
const messagesFile = process.env.MESSAGES_FILE || 'messages.txt';

function saveMessage(message) {
    fs.appendFileSync(messagesFile, `${message}\n`);
}

function getMessages() {
    try {
        const messages = fs.readFileSync(messagesFile, 'utf8');
        return messages.split('\n').filter(Boolean);
    } catch (error) {
        console.error('Error reading messages file:', error);
        return [];
    }
}

// Function to clear messages
function clearMessages() {
    fs.writeFileSync(messagesFile, ''); // Overwrite the file with an empty string
}