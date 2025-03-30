import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 8086

app.listen(PORT,()=>{
    console.log(`server is up on port - ${PORT}`)
})