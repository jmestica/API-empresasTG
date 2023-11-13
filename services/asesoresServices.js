const pool = require('../database/database')

const obtenerAsesores = async () => {

    const asesores = await pool.query("SELECT * FROM public.asesor");

    return asesores.rows

}

module.exports = {
    obtenerAsesores
}