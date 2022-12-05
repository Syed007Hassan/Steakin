//const mysql = require('mysql2');
import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'sqldb',
    user: 'root',
    password: 'QOXlvy89771',
    database: 'restaurantdb'
});




 export default con;