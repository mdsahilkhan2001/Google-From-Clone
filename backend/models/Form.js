const mongoose = require('mongoose');

// Define the Form schema
const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [{ type: Object, required: true }],
  responses: [{ type: Object }],
});

// Create the Form model
module.exports = mongoose.model('Form', formSchema);
