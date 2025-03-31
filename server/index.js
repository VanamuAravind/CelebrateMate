import express from 'express'
import cors from 'cors'
import UserRoute from './routes/User.js'
import connection from './DB.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
connection()
app.use(express.json())
app.use(cors())

app.use("/user",UserRoute)

const PORT = 8086

app.listen(PORT,()=>{
    console.log(`server is up on port - ${PORT}`)
})