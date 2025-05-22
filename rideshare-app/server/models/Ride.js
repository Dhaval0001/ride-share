const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Ride', rideSchema);
