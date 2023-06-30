const express = require("express")
const router = express.Router()

//Subrutas: empresas, contactos y antecedentes 
const empresasRouter = require("./empresasRouter")
const contactosRouter = require("./contactosRouter")
const antecedentesRouter = require("./antecedentesRouter")

router.use("/empresas", empresasRouter)
router.use("/contactos", contactosRouter)
router.use("/antecedentes", antecedentesRouter)


module.exports = router