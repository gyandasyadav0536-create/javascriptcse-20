const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Host static files from the current directory
app.use(express.static(__dirname));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Mock Login Endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Simple mock check
    if (email && password) {
        res.json({ success: true, message: "Login successful!" });
    } else {
        res.status(400).json({ success: false, message: "Invalid credentials" });
    }
});

// Mock Register Endpoint
app.post('/api/register', (req, res) => {
    const { fullname, email, password } = req.body;
    if (fullname && email && password) {
        res.json({ success: true, message: "Registration successful!" });
    } else {
        res.status(400).json({ success: false, message: "Missing fields" });
    }
});

// Mock Contact Endpoint
app.post('/api/contact', (req, res) => {
    res.json({ success: true, message: "Message received!" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
