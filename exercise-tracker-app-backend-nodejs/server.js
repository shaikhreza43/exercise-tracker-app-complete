const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const port = process.env.PORT || 8000;

//const uri = "mongodb+srv://ahmedreza:ahmed123@cluster0-9qjds.gcp.mongodb.net/test?retryWrites=true&w=majority";
//const uri = "mongodb://localhost:27017/exercise_tracker_db";
//const uri= process.env.Local_DB_URI;
const uri= process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open',function(){
    console.log('MongoDb database connection established successfully.')
});


const exerciseRouter = require('./routes/exercises-router');
const usersRouter = require('./routes/users-router');
debugger;
app.use('/exercises',exerciseRouter);
app.use('/users',usersRouter);



app.listen(port,function(){
    console.log('Server is listening to port '+port);
});