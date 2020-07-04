const express= require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./database')

const PORT = 3000
const api = require('./routes/api')

const app = express()


//middleware
app.use(cors())
app.use(bodyParser.json())
app.use('/api',api)


app.get('/', (req,res)=>{
    res.send('Hello from server')
})


app.listen(PORT,()=>{
    console.log('server running & request made')
})