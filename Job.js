const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  description: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", jobSchema);
