const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1> Welcome to Posts </h1>');
})

router.get('/specific',(req,res)=>{
    res.send('<h1> Welcome to Posts </h1>');
})

module.exports = router;