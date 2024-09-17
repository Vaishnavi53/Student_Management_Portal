const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  //import cors
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

//enable cors 
app.use(cors()); 

// MongoDB connection
const mongoURI = 'mongodb+srv://vaishnavimanjalagiri:vaishnavi123@cluster0.odzdb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
      // Force TLS 1.2 for secure connection
    tlsAllowInvalidCertificates: true // If required, for bypassing certificate issues
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error: ', err));

app.get('/', (req, res) => {
    res.send('Backend is working');
});

// Import student routes
const studentRoutes = require('./routes/student');
app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
