const mysql = require('mysql2');


module.exports = () => {
    return mysql.createConnection({
        host: process.env.SQLDBHOST,
        user: process.env.SQLDBUSER,
        database: process.env.SQLDBDATABASE
    });
}