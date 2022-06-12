const express = require('express');
const mongoose = require('mongoose')
const app = express();
//this line defines the port
//tries to get value from .env, but if it does not find it, just uses 3001
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

app.use(require('./routes'));
mongoose.connect('mongodb://localhost/socialnetwork')

//the moment line 16 is ran, you have http://localhost:3001 up
//the server that is up through localhost in port 30001
//can be interacted with via the routes that it uses/requires in line 12
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
