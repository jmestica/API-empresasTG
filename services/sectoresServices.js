const pool = require('../database/database')


const obtenerSectores = async() => {

    const sectores = await pool.query('SELECT * FROM public.sector')

    return sectores.rows

}



module.exports = {
    obtenerSectores
}