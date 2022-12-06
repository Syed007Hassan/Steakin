//const mysql = require('mysql2');
import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'node418756-env-0801702.j.layershift.co.uk',
    user: 'root',
    password: 'QOXlvy89771',
    database: 'restaurantdb',
    
});


// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'fast123',
//     database: 'restaurantdb',
// });                 


 export default con;
