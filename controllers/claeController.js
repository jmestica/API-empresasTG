const claeServices = require('../services/claeServices');

const obtenerClaes =  async (req, res) => {

    const claes = await claeServices.obtenerClaes();

    res.json(claes);

}

const obtenerDescripcionClae =  async (req, res) => {

    const codigo_clae = req.params.codigo_clae

    const clae = await claeServices.obtenerDescripcionClae(codigo_clae);

    res.json(clae);
}

const obtenerClaesEmpresa = async (req, res) => {

    const cuit_empresa = req.params.cuit_empresa

    const claes = await claeServices.obtenerClaesEmpresa(cuit_empresa)

    res.json(claes)

}

module.exports = {
    obtenerClaes,
    obtenerDescripcionClae,
    obtenerClaesEmpresa
}