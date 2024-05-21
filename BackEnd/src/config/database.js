const sql = require('mssql');

const config = {
    user:'Hoang',
    password:'123',
    server:'localhost',
    database:'Fahasa',
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
});

module.exports = sql;


