const asesoresServices = require('../services/asesoresServices')

const obtenerAsesores = async (req, res) => {

    const asesores = await asesoresServices.obtenerAsesores()

    res.json(asesores)
}


module.exports = {
    obtenerAsesores
}