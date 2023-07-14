const express = require("express")
const router = express.Router()

const claeController = require("../controllers/claeController.js")

router.get("/", claeController.obtenerClaes)

router.get("/:codigo_clae", claeController.obtenerDescripcionClae)

module.exports = router