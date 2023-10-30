const db = require('../database');

const getReactivo = async (id) => {

    const { rows } = await db.query(`
  SELECT
    nombre_reactivo,
    cantidad,
    marca,
    fecha_ingreso,
    fecha_vto
  FROM reactivo
  WHERE codigo = $1
`, [id]);

    return rows;
}


const crearReactivo = async (nuevaPieza) => {

    const values = [nuevaPieza.ID_Pieza, nuevaPieza.nombre, nuevaPieza.descripcion, nuevaPieza.cantidad, nuevaPieza.unidad]

    const { rows } = await db.query('INSERT INTO pieza VALUES ($1, $2, $3, $4, $5)', values)

    const es_comprada_values = [nuevaPieza.ID_Pieza, nuevaPieza.es_comprada.nombre_vendedor, nuevaPieza.es_comprada.fecha, nuevaPieza.es_comprada.monto_compra]
    const { es_comprada } = await db.query('INSERT INTO es_comprada VALUES ($1, $2, $3, $4)', es_comprada_values)

    return true

}

//Consulta para obtener el ID de la última inserción de reactivo
const getContador = async () => {

    const res = await db.query('SELECT MAX(contador) AS ultima_insercion FROM reactivo')

    const contador = res.rows[0].ultima_insercion

    return contador === null ? 0 : contador;
}


const agregarConsumo = async (nuevoMovimiento) => {

    const values = [nuevoMovimiento.codigo, nuevoMovimiento.nombre_usuario, nuevoMovimiento.cantidad, nuevoMovimiento.observaciones, nuevoMovimiento.registro_consumo, nuevoMovimiento.descripcion]

    const res = await db.query('INSERT INTO movimiento (id_pieza, nombre_usuario, accion, fecha, hora, datos_adicionales) VALUES ($1, $2, $3, $4, $5, $6)', values)

    return res.rowCount

}


const getHistorial = async (ID_Reactivo) => {

    const { rows } = await db.query('SELECT * FROM consumo WHERE codigo = $1 ORDER BY registro_consumo DESC', [ID_Reactivo])

    return rows

}


const getDatosCompra = async (ID_Pieza) => {

    const { rows } = await db.query('SELECT * FROM es_comprada WHERE id_pieza = $1', [ID_Pieza])

    return rows

}

const getAllInfo = async (ID_Pieza) => {

    const { rows } = await db.query('SELECT movimiento.*, pieza.*, es_comprada.* FROM movimiento  INNER JOIN pieza ON movimiento.id_pieza = pieza.id_pieza  INNER JOIN es_comprada ON pieza.id_pieza = es_comprada.id_pieza WHERE movimiento.id_pieza = $1', [ID_Pieza])

    return rows

}

const getAll = async () => {

    const { rows } = await db.query('SELECT * FROM reactivo');

    return rows;

}


module.exports = {
    getReactivo,
    crearReactivo,
    getContador,
    agregarConsumo,
    getHistorial,
    getDatosCompra,
    getAllInfo,
    getAll
}