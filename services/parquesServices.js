const pool = require('../database/database')

const obtenerParques = async () => {

    const ciudades = await pool.query("SELECT * FROM public.parque_industrial");

    return ciudades.rows

}

const obtenerParquesCiudad = async (nombre_ciudad) => {

   const ciudades_provincia = await pool.query("SELECT nombre_parque FROM public.parque_industrial WHERE nombre_ciudad = $1", [nombre_ciudad]);


   return ciudades_provincia.rows
}



module.exports = {
    obtenerParques,
    obtenerParquesCiudad
}