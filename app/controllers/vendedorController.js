const vendedorService = require('../services/vendedorServices')


const crearVendedor = async (req, res) => {

    const vendedor = req.body

    try {

        const response = await vendedorService.insertarVendedor(vendedor)

        res.send(true)

    } catch (error) {

        res.send(false)
        console.log(error)

    }


}


const obtenerVendedores = async (req, res) => {

    const response = await vendedorService.obtenerVendedores()

    res.send(response)

}


const obtenerVendedor = (req, res) => {

    const id_vendedor = req.params.id

    const response = vendedorService.obtenerVendedor(id_vendedor)

    return response
}

module.exports = { crearVendedor, obtenerVendedores, obtenerVendedor }