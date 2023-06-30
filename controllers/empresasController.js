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
    res.send("Empresa: " + req.params.nombre_empresa + " creada")
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