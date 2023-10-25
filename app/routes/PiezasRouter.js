const express = require('express')
const router = express.Router()

const piezasController = require('../controllers/piezasController')


router.get('/getQR/:id', piezasController.getQR)
router.get('/historial/:id', piezasController.getHistorial)
router.post('/movimiento/:id', piezasController.agregarMovimiento)
router.get('/compra/:id', piezasController.getDatosCompra)
router.get('/info/:id', piezasController.getAllInfo)       
router.get('/:id', piezasController.getPieza)
router.post('/', piezasController.crearPieza)





module.exports = router