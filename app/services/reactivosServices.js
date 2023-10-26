const db = require('../database');

const getPieza = async (id) => {

    const { rows } = await db.query('SELECT * FROM pieza INNER JOIN es_comprada ON pieza.id_pieza = es_comprada.id_pieza WHERE pieza.id_pieza = $1', [id]);

    return rows[0]
}


const crearReactivo = async (nuevoReactivo) => {

    const values = [nuevoReactivo.codigo, nuevoReactivo.observaciones, nuevoReactivo.nombre_reactivo, nuevoReactivo.cantidad, nuevoReactivo.fecha_vto, nuevoReactivo.nro_lote, nuevoReactivo.fecha_ingreso, nuevoReactivo.nro_expediente, nuevoReactivo.conservacion, nuevoReactivo.fecha_finalizacion, nuevoReactivo.marca, nuevoReactivo.fecha_descarte, nuevoReactivo.contador]

    const response = await db.query('INSERT INTO reactivo VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', values)

    return response.rowCount === 1? true: false

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