// app.js
const express = require('express');
const storeRoutes = require('./routes/store');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

const app = express();

app.use(express.json());

// Register the routes
app.use('/api/stores', storeRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

module.exports = app;
