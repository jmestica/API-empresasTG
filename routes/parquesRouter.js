const express = require("express")
const router = express.Router()

const parquesController = require("../controllers/parquesController")

router.get("/", parquesController.obtenerParques)

router.get("/:nombre_provincia", parquesController.obtenerParquesCiudad)

module.exports = router