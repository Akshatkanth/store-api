require('dotenv').config()
//async errors

const express = require('express')
const app = express();

const NotfoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


//middleware
app.use(express.json())



//routes 
app.get('/', (req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products"> products route</a>')
})

//products route
app.use(NotfoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000


const start = async()=>{
    try {
        //connectDB
        app.listen(port, console.log(`server listening at port: ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();