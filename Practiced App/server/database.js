const mongoose = require('mongoose')
const db = "mongodb+srv://sithija97:1042289@mycluster.iipgh.mongodb.net/myApp?retryWrites=true&w=majority"

//connecting to db
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{ console.log('connected succesfully !')})
    .catch((err)=>{ console.log('connection error !' + err)})
