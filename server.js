var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var config = "mongodb://localhost:27017/interview_db";


mongoose.connect(config, { });
const db = mongoose.connection;
db.on('error',function(err){
            console.log("database error "+ err)
        })
db.on('connected',function(){
            console.log("successfully connected")
        })
		
var app = express();
var port = 3000;
const  ProtectedRoutes = express.Router();

//var register = require('./src/App');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
//app.use('/node', ProtectedRoutes);
//app.use('/node/register', register);

app.listen(port, function(){
    console.log("server is running on port  "+ port);
});
