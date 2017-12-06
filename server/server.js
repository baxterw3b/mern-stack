const express = require('express');
const bp = require('body-parser');
const server = express();
const controllers = require('./routes/controllers');

//Import the mongoose module
const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost/dbnamehere';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


server.use(bp.json());
server.use('/api/v1/controllers', controllers);

server.listen(3000);
