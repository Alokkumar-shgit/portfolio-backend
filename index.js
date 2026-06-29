require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');

console.log(app);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });