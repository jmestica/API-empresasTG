const express = require("express")
const router = express.Router()

const empresasController = require("../controllers/empresasController")

//Obtener todas las empresas 
router.get("/", empresasController.obtenerEmpresas)

//Obtener empresa por nombre
router.get("/:nombre_empresa", empresasController.obtenerEmpresa)

//Obtener todos los datos de las empresas+contactos+antecedentes por nombre
router.get("/full/:nombre_empresa", empresasController.obtenerEmpresaJoin)

//Crear empresa
router.post("/", empresasController.crearEmpresa)

//Actualizar empresa
router.patch("/:nombre_empresa", empresasController.modificarEmpresa)


module.exports = router