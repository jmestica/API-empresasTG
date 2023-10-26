const db = require('../database');

const getPieza = async (id) => {

    const { rows } = await db.query('SELECT * FROM pieza INNER JOIN es_comprada ON pieza.id_pieza = es_comprada.id_pieza WHERE pieza.id_pieza = $1', [id]);

    return rows[0]
}


const crearReactivo = async (nuevaPieza) => {

    const values = [nuevaPieza.ID_Pieza, nuevaPieza.nombre, nuevaPieza.descripcion, nuevaPieza.cantidad, nuevaPieza.unidad]

    const {rows} = await db.query('INSERT INTO pieza VALUES ($1, $2, $3, $4, $5)', values)

    const es_comprada_values = [nuevaPieza.ID_Pieza, nuevaPieza.es_comprada.nombre_vendedor, nuevaPieza.es_comprada.fecha, nuevaPieza.es_comprada.monto_compra ]
    const {es_comprada} = await db.query('INSERT INTO es_comprada VALUES ($1, $2, $3, $4)', es_comprada_values)

    return true

}

//Consulta para obtener el ID de la última inserción de reactivo
const getContador = async () => {

    const res = await db.query('SELECT MAX(contador) AS ultima_insercion FROM reactivo')

    const contador = res.rows[0].ultima_insercion

    return contador === null?  0 : contador;
}


const agregarMovimiento = async (nuevoMovimiento) => {

    const values = [nuevoMovimiento.id_pieza, nuevoMovimiento.nombre_usuario, nuevoMovimiento.accion, nuevoMovimiento.fecha, nuevoMovimiento.hora, nuevoMovimiento.datos_adicionales]

    const res = await db.query('INSERT INTO movimiento (id_pieza, nombre_usuario, accion, fecha, hora, datos_adicionales) VALUES ($1, $2, $3, $4, $5, $6)', values)

    return res.rowCount

}


const getHistorial = async (ID_Pieza) => {

    const {rows} = await db.query('SELECT * FROM movimiento WHERE id_pieza = $1', [ID_Pieza])

    return rows

}


const getDatosCompra = async (ID_Pieza) => {

    const {rows} = await db.query('SELECT * FROM es_comprada WHERE id_pieza = $1', [ID_Pieza])

    return rows

}

const getAllInfo = async (ID_Pieza) => {

    const {rows} = await db.query('SELECT movimiento.*, pieza.*, es_comprada.* FROM movimiento  INNER JOIN pieza ON movimiento.id_pieza = pieza.id_pieza  INNER JOIN es_comprada ON pieza.id_pieza = es_comprada.id_pieza WHERE movimiento.id_pieza = $1',[ID_Pieza])

    return rows

}

const getAll = async () => {

    const {rows} = await db.query('SELECT * FROM reactivo');

    return rows;

}


module.exports = {
    getPieza,
    crearReactivo,
    getContador,
    agregarMovimiento,
    getHistorial,
    getDatosCompra,
    getAllInfo,
    getAll
}