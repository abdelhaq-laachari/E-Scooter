const mongoose = require("mongoose");

const scooterSchema = mongoose.Schema({
  latitude: {
    type: Number,
    required: [true, "Please enter a valid latitude"],
  },
  longitude: {
    type: Number,
    required: [true, "Please enter a valid longitude"],
  },
  isRented: {
    type: String,
  },
});

module.exports = mongoose.model("Scooter", scooterSchema);
