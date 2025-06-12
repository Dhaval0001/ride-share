const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const rideRoutes = require('./routes/rides');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // 👈 this is crucial

// Routes
app.use('/api/rides', rideRoutes);

// Simple base route for health check
app.get('/', (req, res) => {
  res.send('RideShare API running');
});

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`MongoDB connected`);
    });
  })
  .catch(err => console.log('MongoDB connection error:', err));
