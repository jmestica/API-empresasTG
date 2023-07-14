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


module.exports = {
    obtenerClaes,
    obtenerDescripcionClae
}