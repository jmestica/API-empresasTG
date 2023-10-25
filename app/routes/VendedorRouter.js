const express = require('express')
const router = express.Router()

const vendedorController = require('../controllers/vendedorController')

router.post('/', vendedorController.crearVendedor)
router.get('/', vendedorController.obtenerVendedores)
router.get('/:id', vendedorController.obtenerVendedor)


module.exports = router