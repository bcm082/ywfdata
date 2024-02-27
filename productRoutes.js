const express = require('express');
const router = express.Router();
const Product = require('./productModel');

// POST route to create a new product
router.post('/products', async (req, res) => {
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
router.get('/products', async (req, res) => {
    try {
    const products = await Product.find({});
    res.status(200).send(products);
    } catch (error) {
    res.status(500).send(error);
    }
});


// GET product by id
router.get('/products/:id', async (req, res) => {
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
router.patch('/products/:id', async (req, res) => {
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
router.delete('/products/:id', async (req, res) => {
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


  

// Export the router
module.exports = router;