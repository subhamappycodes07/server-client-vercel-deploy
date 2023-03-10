const express = require("express");
const app = express();
require("dotenv").config();
const details = require("./routes/details")
const starter = require("./routes/starter")
const cors = require('cors');
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3001', 'https://client-vercel-deploy.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))




app.use('/', starter)
app.use('/api/test', details)


const startServer = async () => {
    const port = process.env.PORT || 5000
    try {
        app.listen(port, console.log(`server listening at port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}


startServer()