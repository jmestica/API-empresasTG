const pool = require('../database/database')


const obtenerClaes = async () => {

    const claes = await pool.query("SELECT * FROM public.clae");

    return claes.rows

}

const obtenerDescripcionClae = async (codigo_clae) => {
    
    console.log(codigo_clae)

   const descripcion_clae = await pool.query("SELECT * FROM public.clae WHERE codigo_clae = $1", [codigo_clae]);


   return descripcion_clae.rows
}

 

module.exports = {
    obtenerClaes,
    obtenerDescripcionClae
}