//This code does the following:

// Imports the Express module.
// Creates an Express application.
// Defines a route handler for GET requests to the root URL (/). When this route is accessed, it responds with a simple message.
// Tells the Express app to listen for incoming requests on the specified port.

const express = require('express');
const app = express();
const port = 3000; // Choose a port number
const Product = require('./productModel');
require('./db');

app.use(express.json());

app.get('/',(req, res) => {
    res.send('Express Server Test');
});

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
}) 

// POST route to create a new product
app.post('/products', async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      console.error(error); // Log the error to see detailed information
      res.status(400).send(error.message); // Send back the error message to the client
    }
  });
  

// GET all products
app.get('/products', async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  });


// GET product by id
app.get('/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  });


// PUT Update product by id
app.patch('/products/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  });


// Delete product by ID
app.delete('/products/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  });


