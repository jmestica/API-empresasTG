const express = require("express")
const router = express.Router()

//Subrutas
const empresasRouter = require("./empresasRouter")
const contactosRouter = require("./contactosRouter")
const antecedentesRouter = require("./antecedentesRouter")
const ciudadesRouter = require( "./ciudadesRouter")
const parquesRouter = require("./parquesRouter")


router.use("/empresas", empresasRouter)
router.use("/contactos", contactosRouter)
router.use("/antecedentes", antecedentesRouter)
router.use("/ciudades", ciudadesRouter)
router.use('/parques', parquesRouter)


module.exports = router