//const mysql = require('mysql2');
import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'node419078-stakin-restaurant.j.layershift.co.uk:3306/restaurantdb',
    user: 'root',
    password: 'QOXlvy89771',
});




 export default con;