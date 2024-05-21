const sql = require('mssql');
require('dotenv').config()

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true,
        trustConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    }
    ,
    port: 1433
}

sql.connect(config, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Connected to database');
    console.log(config)
});

module.exports = sql;


