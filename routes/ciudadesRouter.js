const express = require("express")
const router = express.Router()

const ciudadesController = require("../controllers/ciudadesController")

router.get("/", ciudadesController.obtenerCiudades)

router.get('/search/:id', ciudadesController.obtenerCiudadesSearch)

router.get("/:nombre_provincia", ciudadesController.obtenerCiudadesProvincia)

module.exports = router