const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API endpoint to handle form submissions
app.post('/api/forms', (req, res) => {
    // Handle form data here
    console.log(req.body);
    res.status(200).send({ message: 'Form data received!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
