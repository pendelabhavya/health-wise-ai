const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoints
app.get('/api/appointments', (req, res) => {
    res.json([
        { id: 1, doctor: 'Dr. Anjali Patel', specialty: 'Pediatrics', date: '2025-10-19', time: '17:00' }
    ]);
});

app.get('/api/reminders', (req, res) => {
    res.json([
        { id: 1, medicine: 'dodo', dosage: '1', time: '17:15' },
        { id: 2, medicine: 'dodo', dosage: '2', time: '16:51' }
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
