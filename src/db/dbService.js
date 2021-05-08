const mysql = require('mysql');
require('dotenv').config({
    path: './src/config/.env'
});

const connection = mysql.createConnection({
    host:process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

