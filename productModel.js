const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  tags: [String], // Array of strings to store multiple tags
  yearListed: { type: Number },
  imageLink: { type: String }, // Existing image link
  videoLink: { type: String },
  mainImage: { type: String } // Field for storing the main image URL
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product; //Export the Model

