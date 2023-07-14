const express = require("express")
const router = express.Router()

const sectoresController = require("../controllers/sectoresController")

router.get("/", sectoresController.obtenerSectores)

module.exports = router