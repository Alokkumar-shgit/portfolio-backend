const express = require('express');
const cors = require('cors');
const contactRoutes = require('./src/routes/contactRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);


app.get('/',(req,res)=>{
    res.send('Portfolio Backend is running');
})

module.exports = app;