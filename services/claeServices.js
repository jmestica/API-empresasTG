const pool = require('../database/database')


const obtenerClaes = async () => {

    const claes = await pool.query("SELECT * FROM public.clae");

    return claes.rows

}

const obtenerDescripcionClae = async (codigo_clae) => {
    
   const descripcion_clae = await pool.query("SELECT * FROM public.clae WHERE codigo_clae = $1", [codigo_clae]);

   return descripcion_clae.rows
}

const asignarClae = async (codigo_clae, cuit_empresa) => {

    const asignacion = await pool.query(`INSERT INTO public.tiene (codigo_clae, cuit_empresa) VALUES ($1, $2)`, [codigo_clae, cuit_empresa]);

    return asignacion
}
 

module.exports = {
    obtenerClaes,
    obtenerDescripcionClae,
    asignarClae
}