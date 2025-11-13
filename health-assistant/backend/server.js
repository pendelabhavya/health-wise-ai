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

app.get('/api/doctor/stats', (req, res) => {
    res.json({
        totalPatients: 125,
        totalBookings: 50
    });
});

app.get('/api/doctor/schedule', (req, res) => {
    res.json({
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        data: [5, 7, 3, 8, 6]
    });
});

app.get('/api/doctor/progress', (req, res) => {
    res.json({
        completed: Math.floor(Math.random() * 50) + 1,
        pending: Math.floor(Math.random() * 10) + 1
    });
});

app.get('/api/doctor/reminders', (req, res) => {
    res.json([
        { id: 1, text: 'Follow up with Bhavya Pendela' },
        { id: 2, text: 'Review lab results for Jane Doe' },
        { id: 3, text: 'Prepare for surgery for Peter Jones' },
        { id: 4, text: 'Call Mary Johnson about her test results' }
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
