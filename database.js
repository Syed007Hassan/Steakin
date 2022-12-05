//const mysql = require('mysql2');
import mysql from 'mysql2';

const con = mysql.createConnection({
    // host: 'localhost',
    user: 'root',
    password: 'QOXlvy89771',
    database: 'node419078-stakin-restaurant.j.layershift.co.uk/restaurantdb'
});




 export default con;