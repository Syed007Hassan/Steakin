//const mysql = require('mysql2');
import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'node419078-stakin-restaurant.j.layershift.co.uk',
    user: 'root',
    password: 'QOXlvy89771',
    database: 'restaurantdb'
});




 export default con;