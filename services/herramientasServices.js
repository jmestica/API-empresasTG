const pool = require('../database/database')

const obtenerHerramientas = async() => {
    const herramientas = await pool.query('SELECT * FROM public.herramienta')
    return herramientas.rows
}

module.exports = {
    obtenerHerramientas
}