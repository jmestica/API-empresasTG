const db = require('../database');


const insertarVendedor = async (vendedor) => {

    const values = [vendedor.nombre_vendedor, vendedor.ubicacion]
    const res = await db.query("INSERT INTO vendedor VALUES ($1, $2)", values)

    return res
}

const obtenerVendedores = async () => { 

    const res = await db.query("SELECT * FROM vendedor")

    return res.rows

}

const obtenerVendedor = async (id_vendedor) => {


}


module.exports = { insertarVendedor, obtenerVendedores, obtenerVendedor}