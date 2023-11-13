const pool = require('../database/database')

const obtenerEmpresa = async (cuit) => {

    const params = [cuit]

    const empresa =  await pool.query(`SELECT * FROM public.empresa WHERE cuit = $1`, params)

    return empresa.rows[0]

}


const obtenerCadenaDeValor = async (cuit) => {

    const params = [cuit]

    const cadena = await pool.query(`SELECT nombre_sector FROM public.provee WHERE cuit_empresa = $1`, params)

    return cadena.rows

}


const crearEmpresa = async (cuit_completo, razon_social, tamaño_sepyme, domicilio, descripcion, link_web, link_crm, provincia, ciudad, parque_industrial, sector_pertenece) => {
    
    const parque = parque_industrial === 'No pertenece a parque'? null: parque_industrial

    const params = [cuit_completo, razon_social, domicilio, descripcion, tamaño_sepyme, link_web, link_crm, sector_pertenece, provincia, ciudad, parque];
  
    const nueva_empresa = await pool.query(
      `INSERT INTO public.empresa(cuit, razon_social, domicilio, descripcion, "tamaño_sepyme", link_web, link_crm, sector_pertenece ,provincia, ciudad, parque_industrial) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      params
    );
  
    return nueva_empresa;
}


const asignarSector = async (nombre_sector, cuit) => {

    const params = [nombre_sector, cuit]

    const vinculo = await pool.query(`INSERT INTO public.provee
    (nombre_sector, cuit_empresa)
        VALUES ($1, $2)`, params)

    return vinculo

}

  
module.exports = {
    crearEmpresa,
    asignarSector,
    obtenerEmpresa,
    obtenerCadenaDeValor
}