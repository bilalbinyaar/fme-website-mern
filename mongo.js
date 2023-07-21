const mongoose = require('mongoose');
// DB CONNECTION
mongoose
  .connect('mongodb://localhost:27017/db-name')
  .then(() => {
    console.log('connected');
  })
  .catch(() => {
    console.log('failed');
  });

// SCHEMA
const newSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

// MODEL
const collection = mongoose.model('contact', newSchema);

module.exports = collection;
