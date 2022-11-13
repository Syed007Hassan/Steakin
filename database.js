//const mysql = require('mysql2');
import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fast123',
    database: 'restaurantdb'
});

export default con;