const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const router = require('./router');

var app = express();

app.use(bodyParser.json({type: '*/*'}));


//stu up db----------------------
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employeesLogin');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db connected!!!")
});
//---------------------------------

//initialize router for app
router(app);


const port = process.env.PORT || 3000;
const server = http.createServer(app)
server.listen(port)
console.log('server is runing on port:', port)
