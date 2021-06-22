const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/world');

const Log = mongoose.model('Logs', { route: String, dateTime: String });

module.exports = {
  Log
}