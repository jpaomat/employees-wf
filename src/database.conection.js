const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./database.config');

const pool = mysql.createPool(database);
pool.getConnection((err, connection) =>{
    if (err) {
        if (err.code === 'PROROCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS MANY CONNECIONS');
        }
        if (err.code === 'ECONNREFUSE') {
            console.error('DATABASE CONNECTION WAS REFUSED')
        }
    }
    if (connection) connection.release();
    console.log('DATABASE IS CONNECTED');
    return;
})
pool.query = promisify(pool.query);
module.exports = pool;