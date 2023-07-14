const Pool =  require('pg').Pool

const pool = new Pool({
    host: process.env.IP_ADDRESS,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD,
    user: process.env.USER,
    port: process.env.DB_PORT
})

module.exports = pool