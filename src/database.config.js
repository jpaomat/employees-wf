module.exports = {
    database: {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database : 'apiemployees',
        port : '3306'
    }

    // database: {
    //     connectionLimit: 10,
    //     host: process.env.MYSQL_HOST || 'localhost',
    //     user: process.env.MYSQL_USER || 'root',
    //     password: process.env.MYSQL_PASS || '',
    //     database : process.env.MYSQL_DB ||'apiemployees',
    //     port : process.env.MYSQL_PORT ||'3306'
    // }
}