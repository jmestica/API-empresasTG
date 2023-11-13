const express = require("express")
const router = express.Router()

const herramientasController = require("../controllers/herramientasController")

router.get("/", herramientasController.obtenerHerramientas)

module.exports = router