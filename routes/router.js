const express = require("express")
const router = express.Router()

//Subrutas
const empresasRouter = require("./empresasRouter")
const contactosRouter = require("./contactosRouter")
const antecedentesRouter = require("./antecedentesRouter")
const ciudadesRouter = require( "./ciudadesRouter")
const parquesRouter = require("./parquesRouter")
const sectoresRouter = require("./sectoresRouter")
const herramientasRouter = require( "./herramientasRouter")
const claeRouter = require( "./claeRouter")


router.use('/empresas', empresasRouter)
router.use('/contactos', contactosRouter)
router.use('/antecedentes', antecedentesRouter)
router.use('/ciudades', ciudadesRouter)
router.use('/parques', parquesRouter)
router.use('/sectores', sectoresRouter)
router.use('/herramientas', herramientasRouter)
router.use('/clae', claeRouter)


module.exports = router