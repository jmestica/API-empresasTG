const qrcode = require('qrcode');
const reactivosServices = require('../services/reactivosServices');

// Este endpoint, es para obtener la información referente a una pieza,
// su historial e información de compra.
const getReactivo = async (req, res) => {

    const ID_Reactivo = req.params.id;

    const response = await reactivosServices.getReactivo(ID_Reactivo);

    res.send(response);
}


// Este endpoint, es para obtener el QR de una pieza, puede ser utilizado
// cuando recién es creada la pieza, o bien cuando se quiere obtener nuevamente
// el QR de la pieza, por pérdidas o daños.

const getQR = (req, res) => {

    const ID_Pieza = req.params.id;

    const url = `http://192.168.0.130:5173/tracker/gestionarpieza/${ID_Pieza}`

    qrcode.toDataURL(url, (err, src) => {
        if (err) res.send("No se pudo crear el QR de la pieza");
        res.send({ qr_code: src });
    });

}

//Este endpoint es para dar de alta un nuevo reactivo en la base de datos.
const crearReactivo = async (req, res) => {

    const nuevoReactivo = req.body

    const response = await reactivosServices.crearPieza(nuevoReactivo)
  
    res.send(response)
}

//Endpoint para obtener el ID de la ultima inserción en la base de datos para codificar nuevos reactivos
const getContador = async (req, res) => {

    const numero_contador = await reactivosServices.getContador()

    res.send({numero_contador: numero_contador})

}

//Este endpoint es para obtener todos los movimientos de una determinada fecha.
const getHistorial = async (req, res) => {

    const ID_Reactivo = req.params.id
    const response = await reactivosServices.getHistorial(ID_Reactivo)
    res.send(response)
}


//Este endpoint es para crear un nuevo movimiento en la pieza
const agregarMovimiento = async (req, res) => {

    const nuevoMovimiento = req.body

    const response = await reactivosServices.agregarMovimiento(nuevoMovimiento)

    response === 1 ? res.send({ success: true }) : res.send({ success: false })


}


const getDatosCompra = async (req, res) => {

    const ID_Pieza = req.params.id

    const response = await reactivosServices.getDatosCompra(ID_Pieza)

    response.map((item) => {
        item.fecha = item.fecha.toLocaleDateString()
    })

    res.send(response)
}


const getAllInfo = async (req, res) => {

    const ID_Pieza = req.params.id

    const response = await reactivosServices.getAllInfo(ID_Pieza)

    response.map((item) => {
        item.hora = item.hora.slice(0, 5),
            item.fecha = item.fecha.toLocaleDateString()
    })


    res.send(response)

}

const getAll = async (req, res) => {

    try {
        const response = await reactivosServices.getAll()
        res.send(response)
    } catch (error) {
        console.error(error)
        res.send(error)
    }

}


module.exports = {
    getReactivo,
    getQR,
    crearReactivo,
    getContador,
    getHistorial,
    agregarMovimiento,
    getDatosCompra,
    getAllInfo,
    getAll
} 