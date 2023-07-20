const pool = require('../database/database')

const crearContacto = async (nombre_contacto, puesto, telefono, email, cuit_empresa) => {

    const params = [nombre_contacto, puesto, telefono, email, cuit_empresa]

    const nuevo_contacto = await pool.query(`INSERT INTO public.contacto(
        nombre_contacto, puesto, telefono, email, cuit_empresa)
        VALUES ($1, $2, $3, $4, $5)`, params)

    return nuevo_contacto

}



module.exports = {
    crearContacto
}