const empresasServices = require('../services/empresasServices')
const claeServices = require('../services/claeServices')
const antecedentesServices = require('../services/antecedentesServices')
const contactosServices = require('../services/contactosServices')

const obtenerEmpresas = (req, res) => {
    res.send("Empresas")
}

const obtenerEmpresaJoin = (req, res) => {

    const nombre_empresa = req.parms.nombre_empresa

    res.send("Todos los datos de la empresa")
}

const obtenerEmpresa = async (req, res) => {

    //Clave de búsqueda
    const cuit_empresa = req.params.cuit_empresa

    //Filtros 
    const nivel_kaizen = req.query.kaizen
    const cadena_valor = req.query.cadena
    const provincia = req.query.provincia
    const tamaño = req.query.tam

    const empresa = await empresasServices.obtenerEmpresa(cuit_empresa)

    res.json(empresa)
}

const obtenerCadenaDeValor = async (req, res) => {

    const cuit_empresa = req.params.cuit_empresa

    const cadena = await empresasServices.obtenerCadenaDeValor(cuit_empresa)

    res.json(cadena)

}


const crearEmpresa = async (req, res) => {
  
    const {cuit1, cuit2, cuit3, razon_social, domicilio, descripcion, link_web, link_crm, provincia, ciudad, parque_industrial, sector_pertenece} = req.body

    let cuit_completo = cuit1+cuit2+cuit3;

    let tamaño_sepyme = req.body['tamaño_sepyme']

    //Se crea empresa
    const nueva_empresa = await empresasServices.crearEmpresa(cuit_completo, razon_social, tamaño_sepyme ,domicilio, descripcion, link_web, link_crm, provincia, ciudad, parque_industrial, sector_pertenece)
  
    if (nueva_empresa) {

        const {clae} = req.body

        //Asignación de los claes correspondientes
        clae.forEach(async (claeEmpresa)=> {
            await claeServices.asignarClae(claeEmpresa, cuit_completo)
        });

        //Creación de contactos
        const {contactos} = req.body
        
        contactos.forEach(async (contacto) => {
                await contactosServices.crearContacto(contacto.nombre, contacto.puesto, contacto.telefono, contacto.email, cuit_completo)
        })

        //Vinculación con cadena de valor
        const {sectores_provee} = req.body

        sectores_provee.forEach(async (sector) => {
            await empresasServices.asignarSector(sector, cuit_completo)
        })

        //Crear antecedentes
        const {antecedentes} = req.body

        antecedentes.forEach(async (antecedente)=> {

            const resumen = antecedente.resumen
            const motivo = antecedente.motivo
            const año = antecedente['año']
            const estado = antecedente.estado
            const ciudad = antecedente.ciudad

            const nuevo_antecedente = await antecedentesServices.crearAntecedente(resumen, motivo, año, estado, ciudad, cuit_completo)

            if (nuevo_antecedente){

                     //Vincular asesores al antecedente (tabla participa)
                    const asesores = antecedente.asesores

                    asesores.forEach(async (asesor) => {
                        await antecedentesServices.vincularAsesor(motivo, año, estado, resumen, asesor)
                    })

                    //Vincular herramientas al antecedente
                    const herramientas = antecedente.herramientas

                    if (herramientas.length > 0){

                    herramientas.forEach(async (herramienta) => {
                        await antecedentesServices.vincularHerramienta(motivo, año, estado, resumen,  herramienta)
                    })
                }
                
            } 
            
        })
    
        res.json(nueva_empresa)
    } else {

        res.json({error: 'No fue posible crear la empresa'})
    }

   
}

const modificarEmpresa = (req, res) => {

    //Clave de modificación
    const nombre_empresa = req.params.nombre_empresa

    res.send("Empresa: " + req.params.nombre_empresa + " modificada")
}

const borrarEmpresa = (req, res) => {

    //Clave de borrado
    const nombre_empresa = req.params.nombre_empresa

    res.send("Empresa: " + req.params.nombre_empresa + " borrada")
}

module.exports = {
    obtenerEmpresas,
    obtenerEmpresaJoin,
    obtenerEmpresa,
    crearEmpresa,
    modificarEmpresa,
    borrarEmpresa,
    obtenerCadenaDeValor
}