const express = require('express')
const router = express.Router()

const reactivosController = require('../controllers/reactivosController')


router.get('/getQR/:id', reactivosController.getQR)
router.get('/historial/:id', reactivosController.getHistorial)
router.post('/movimiento/:id', reactivosController.agregarMovimiento)
router.get('/compra/:id', reactivosController.getDatosCompra)
router.get('/info/:id', reactivosController.getAllInfo)       
router.get('/:id', reactivosController.getPieza)
router.post('/', reactivosController.crearPieza)





module.exports = router