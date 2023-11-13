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

const obtenerCiudadesSearch = async (req, res) => {

    const id = req.params.id

    const ciudades_search = await ciudadesServices.obtenerCiudadesSearch(id)

    res.json(ciudades_search)

}



module.exports = {
    obtenerCiudades,
    obtenerCiudadesProvincia,
    obtenerCiudadesSearch
}