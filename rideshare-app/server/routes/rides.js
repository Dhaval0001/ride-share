const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');

router.post('/test', (req, res) => {
    console.log('TEST ROUTE HIT:', req.body);
    res.send('OK');
  });

// POST /rides → create a new ride
router.post('/', async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    const savedRide = await newRide.save();
    res.status(201).json(savedRide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /rides → get all rides
router.get('/', async (req, res) => {
  try {
    const rides = await Ride.find().sort({ date: 1, time: 1 });
    res.status(200).json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
