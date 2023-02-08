const express = require('express')
const app = express()
require('dotenv').config();

// //app use cors
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({extended: true }))
app.use(express.json())
//connect database
const db = require('./config/db')
db.connect()

const route = require('./api/index')
route(app)

app.listen(process.env.PORT, () => {
    console.log(`app listen on port ${process.env.PORT}`);
})

