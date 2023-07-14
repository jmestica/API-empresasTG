const herramientasServices = require('../services/herramientasServices');

const obtenerHerramientas =  async (req, res) => {
    const herramientas = await herramientasServices.obtenerHerramientas();
    res.json(herramientas);
}

module.exports = {
    obtenerHerramientas
}