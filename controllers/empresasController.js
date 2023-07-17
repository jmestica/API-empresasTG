const empresasServices = require('../services/empresasServices')

const obtenerEmpresas = (req, res) => {
    res.send("Empresas")
}

const obtenerEmpresaJoin = (req, res) => {

    const nombre_empresa = req.parms.nombre_empresa

    res.send("Todos los datos de la empresa")
}

const obtenerEmpresa = (req, res) => {

    //Clave de búsqueda
    const nombre_empresa = req.params.nombre_empresa

    //Filtros 
    const nivel_kaizen = req.query.kaizen
    const cadena_valor = req.query.cadena
    const provincia = req.query.provincia
    const tamaño = req.query.tam

    res.send("Empresa: " + req.params.nombre_empresa)
}

const crearEmpresa = (req, res) => {
  
    const {cuit1, cuit2, cuit3, razon_social, domicilio, descripcion, link_web, link_crm, provincia, ciudad, parque_industrial} = req.body

    let cuit_completo = cuit1+cuit2+cuit3;

    let tamaño_sepyme = req.body['tamaño_sepyme']


    empresasServices.crearEmpresa(cuit_completo, razon_social, tamaño_sepyme ,domicilio, descripcion, link_web, link_crm, provincia, ciudad, parque_industrial)
  
    res.send("Empresa: " + cuit_completo)
}

const modificarEmpresa = (req, res) => {

    //Clave de modificación
    const nombre_empresa = req.params.nombre_empresa

    res.send("Empresa: " + req.params.nombre_empresa + " modificada")
}

const borrarEmpresa = (req, res) => {

    //Clave de borrado
    const nombre_empresa = req.params.nombre_empresa

    res.send("Empresa: " + req.params.nombre_empresa + " borrada")
}

module.exports = {
    obtenerEmpresas,
    obtenerEmpresaJoin,
    obtenerEmpresa,
    crearEmpresa,
    modificarEmpresa,
    borrarEmpresa,
}