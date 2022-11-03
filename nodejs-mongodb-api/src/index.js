const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors');

require('dotenv').config()
const userRoutes = require('./routes/user.js')

const app = express()
let port = process.env.PORT || 4200
app.use(cors());
// Middleware
app.use(express.json())
app.use('/api', userRoutes)

// Routes
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

//MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{console.log('Connected to MongoDB ATLAS')})
    .catch((error)=>{console.error(error)})

app.listen(port, () => console.log('server listening on port: ' + port))