const qrcode = require('qrcode');
const piezasServices = require('../services/reactivosServices');

// Este endpoint, es para obtener la información referente a una pieza,
// su historial e información de compra.
const getPieza = async (req, res) => {

    const ID_Pieza = req.params.id;

    const response = await piezasServices.getPieza(ID_Pieza);

    response.fecha = response.fecha.toLocaleDateString()

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

//Este endpoint es para dar de alta una nueva pieza en la base de datos.
const crearPieza = async (req, res) => {

    const nuevaPieza = req.body

    const response = await piezasServices.crearPieza(nuevaPieza)

    res.send(response)
}

//Este endpoint es para obtener todos los movimientos de una determinada fecha.
const getHistorial = async (req, res) => {

    const ID_Pieza = req.params.id

    const response = await piezasServices.getHistorial(ID_Pieza)

    response.map((item) => {
        item.hora = item.hora.slice(0, 5),
            item.fecha = item.fecha.toLocaleDateString()
    })

    res.send(response)


}


//Este endpoint es para crear un nuevo movimiento en la pieza
const agregarMovimiento = async (req, res) => {

    const nuevoMovimiento = req.body

    const response = await piezasServices.agregarMovimiento(nuevoMovimiento)

    response === 1 ? res.send({ success: true }) : res.send({ success: false })


}


const getDatosCompra = async (req, res) => {

    const ID_Pieza = req.params.id

    const response = await piezasServices.getDatosCompra(ID_Pieza)

    response.map((item) => {
        item.fecha = item.fecha.toLocaleDateString()
    })

    res.send(response)
}


const getAllInfo = async (req, res) => {

    const ID_Pieza = req.params.id

    const response = await piezasServices.getAllInfo(ID_Pieza)

    response.map((item) => {
        item.hora = item.hora.slice(0, 5),
            item.fecha = item.fecha.toLocaleDateString()
    })


    res.send(response)

}


module.exports = {
    getPieza,
    getQR,
    crearPieza,
    getHistorial,
    agregarMovimiento,
    getDatosCompra,
    getAllInfo
} 