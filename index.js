require("dotenv").config()

require("./database/database")

//Express config y routers
const express = require("express")
const app = express()
const apiRouter = require("./routes/router")

const cors = require('cors');
app.use(cors({credentials: true}));

const PORT = process.env.PORT || 3500
const IP_ADDRESS = process.env.IP_ADDRESS;

app.use(express.json())

app.use("/api", apiRouter)

//Catches 404 not found errors
app.use((req,res)=>{
    res.sendStatus(404)
})

app.listen(PORT, '192.168.0.30', ()=>{
    console.log("LISTENING ON PORT: ", PORT)
})