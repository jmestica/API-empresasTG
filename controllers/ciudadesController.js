const ciudadesServices = require('../services/ciudadesServices')


const obtenerCiudades = async (req, res) => {

    const ciudades = await ciudadesServices.obtenerCiudades()

    res.json(ciudades)
    
}

const obtenerCiudadesProvincia = async (req, res) => {

    const nombre_provincia = req.params.nombre_provincia

    const ciudades_provincia = await ciudadesServices.obtenerCiudadesProvincia(nombre_provincia)

    res.json(ciudades_provincia)

}



module.exports = {
    obtenerCiudades,
    obtenerCiudadesProvincia
}