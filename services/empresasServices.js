const pool = require('../database/database')

const crearEmpresa = async(cuit_completo, razon_social ,tamaño_sepyme, domicilio, descripcion, link_web, link_crm, provincia, ciudad, parque_industrial) => {

    const params =  [cuit_completo, razon_social , domicilio, descripcion, tamaño_sepyme, link_web, link_crm,sector_pertenece, provincia, ciudad, parque_industrial]

    const nueva_empresa = await pool.query(`INSERT INTO public.empresa(cuit, razon_social, domicilio, descripcion, "tamaño_sepyme", link_web, link_crm, sector_pertenece, provincia, ciudad, parque_industrial) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, params)

    return nueva_empresa
}

module.exports = {
    crearEmpresa
}