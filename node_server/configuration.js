var mysql=require('mysql');

var connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zzq_lsf',
    port: '3306'    
});
module.exports.connection=connection;
