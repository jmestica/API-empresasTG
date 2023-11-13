const parquesServices = require('../services/parquesServices');

const obtenerParques =  async (req, res) => {

    const parques = await parquesServices.obtenerParques();

    res.json(parques);

}

const obtenerParquesCiudad =  async (req, res) => {

    const nombre_provincia = req.params.nombre_provincia

    const parques = await parquesServices.obtenerParquesCiudad(nombre_provincia);

    res.json(parques);
}


module.exports = {
    obtenerParques,
    obtenerParquesCiudad
}