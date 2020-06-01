const express = require('express');   //importing
const mongoose = require('mongoose');
const app = express();  //executing on top of app variable
require('dotenv/config');

//middleware
const postRoutes = require('./routes/posts');
app.use('/posts',postRoutes);

//routes
app.get('/',(req,res)=>{
    res.send('<h1> Welcome Home </h1>');
});

app.get('/users',(req,res)=>{
    res.send('<h1> Welcome to User Data </h1>');
})

//connecting to db
mongoose.connect(process.env.db,{ useUnifiedTopology: true },
()=>console.log('connected to db sithija'))

//listening to server
app.listen(1500);
