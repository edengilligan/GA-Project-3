const mongoose = require('mongoose');


const timeSchema = new mongoose.Schema({
  name: String,
  date: String,
  start: String,
  finish: String,
  notes: String,

});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Time', timeSchema);
