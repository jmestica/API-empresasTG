const express = require("express")
const router = express.Router()

const asesoresController = require("../controllers/asesoresController")

router.get("/", asesoresController.obtenerAsesores)


module.exports = router