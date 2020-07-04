const express = require('express');

//creating app
const app = express();

//listening for req
app.listen(3000);

//request
app.get('/',(req,res)=>{
    //res.send('<h2>Home Page</h2>')
    res.sendFile('./view/index.html',{root : __dirname});
});

app.get('/about',(req,res)=>{
    //res.send('<h2>About Page</h2>')
    res.sendFile('./view/about.html',{root : __dirname});
});

//redirect
app.get('/about-me', (req,res)=>{
    res.redirect('./about');
});

//404
app.use((req,res)=>{
    res.status(404).sendFile('./view/404.html',{root : __dirname});
})