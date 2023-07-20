const express = require("express")
const router = express.Router()

const empresasController = require("../controllers/empresasController")

//Obtener todas las empresas 
router.get("/", empresasController.obtenerEmpresas)

//Obtener empresa por nombre
router.get("/:cuit_empresa", empresasController.obtenerEmpresa)

//Obtener todos los datos de las empresas+contactos+antecedentes por nombre
router.get("/full/:cuit_empresa", empresasController.obtenerEmpresaJoin)

//Obtener sectores que la empresa abastece
router.get("/cadena/:cuit_empresa", empresasController.obtenerCadenaDeValor)

//Crear empresa
router.post("/", empresasController.crearEmpresa)

//Actualizar empresa
router.patch("/:cuit_empresa", empresasController.modificarEmpresa)


module.exports = router