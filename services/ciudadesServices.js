const pool = require('../database/database')


const obtenerCiudades = async () => {

    const ciudades = await pool.query("SELECT * FROM public.ciudad");

    return ciudades.rows

}

const obtenerCiudadesProvincia = async (nombre_provincia) => {

   const ciudades_provincia = await pool.query("SELECT nombre_ciudad FROM public.ciudad WHERE nombre_provincia = $1", [nombre_provincia]);


   return ciudades_provincia.rows
}

const obtenerCiudadesSearch = async (id) => {

    const ciudades_search = await pool.query("SELECT nombre_ciudad FROM public.ciudad WHERE nombre_ciudad ILIKE $1", [`%${id}%`]);
 
    return ciudades_search.rows
 }
 

module.exports = {
    obtenerCiudades,
    obtenerCiudadesProvincia,
    obtenerCiudadesSearch
}