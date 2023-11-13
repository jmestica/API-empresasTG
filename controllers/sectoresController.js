const sectoresServices = require('../services/sectoresServices');

const obtenerSectores =  async (req, res) => {
    const sectores = await sectoresServices.obtenerSectores();
    res.json(sectores);
}

module.exports = {
    obtenerSectores
}