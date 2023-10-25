require("dotenv").config();
const express = require("express");
const cors = require("cors");
require('./database');



//IMPORT Routers
const PiezasRouter = require('./routes/PiezasRouter')
const VendedorRouter = require('./routes/VendedorRouter')
const LoginRouter = require('./routes/LoginRouter')


const app = express();


const PORT = process.env.PORT || 4000;


app.use(express.json());

app.use(cors());

//Routing requests
app.use('/api/pieza', PiezasRouter)
app.use('/api/vendedor', VendedorRouter)
app.use('/api/login', LoginRouter)

//Catches 404 not found errors
app.use((req, res) => {
  res.sendStatus(404)
})


app.listen(PORT, '192.168.0.130', () => {
  console.log("listening on port", PORT);
});