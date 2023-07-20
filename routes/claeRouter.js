const express = require("express")
const router = express.Router()

const claeController = require("../controllers/claeController.js")

router.get("/", claeController.obtenerClaes)

router.get("/:codigo_clae", claeController.obtenerDescripcionClae)

router.get('/clae_empresa/:cuit_empresa', claeController.obtenerClaesEmpresa)

module.exports = router