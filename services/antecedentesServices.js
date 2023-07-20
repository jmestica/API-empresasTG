const pool = require('../database/database')

const crearAntecedente = async (resumen, motivo, año, estado, ciudad, cuit_empresa) => {

    const params = [resumen, motivo, año, estado, ciudad, cuit_empresa]

    const antecedente = await pool.query(`INSERT INTO public.antecedente(
        resumen, motivo, "año", estado, ciudad, cuit_empresa) VALUES ($1, $2, $3, $4, $5, $6)`, params);

    return antecedente

}

const vincularAsesor = async (motivo, año, estado, resumen ,nombre_asesor) => {

    const params = [motivo, año, estado, resumen, nombre_asesor]

    const vinculo = await pool.query(`INSERT INTO public.participa (motivo, "año", estado, resumen, nombre_asesor)
        VALUES ($1, $2, $3, $4, $5)`, params)

    return vinculo
}


const vincularHerramienta = async (motivo, año, estado, resumen, nombre_herramienta) => {

    const params = [motivo, año,estado , resumen, nombre_herramienta]

    const vinculo = await pool.query(`INSERT INTO public.utiliza(motivo, "año", estado, resumen, nombre_herramienta)
        VALUES ($1, $2, $3, $4, $5)`, params)

    return vinculo

}

module.exports = {
    crearAntecedente,
    vincularAsesor,
    vincularHerramienta
}