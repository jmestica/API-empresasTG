require("dotenv").config()

//Express config y routers
const express = require("express")
const app = express()
const apiRouter = require("./routes/router")

const PORT = process.env.PORT || 3500
const IP_ADDRESS = process.env.IP_ADDRESS;

app.use(express.json())

app.use("/api", apiRouter)

//Catches 404 not found errors 
app.use((req,res)=>{
    res.sendStatus(404)
})

app.listen(PORT, IP_ADDRESS, ()=>{
    console.log("LISTENING ON PORT: ", PORT)
})