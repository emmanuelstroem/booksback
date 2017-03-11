/**
 * Created by emmanuel on 08/03/2017.
 */

//import mysql module
var mysql = require('mysql');

//connection variables
var config = {
    host: '35.154.199.83',
    user: 'root',
    password: 'root',
    database: 'library'
};

//create the database connection
var connection = mysql.createPool(config);

//establish the connection
var dbconnect = connection.getConnection(function(err){
    if(err){
        console.log('Err connecting to DB: ' + err.stack);
        return;
    }

    console.log('DB connected');
});

module.exports = connection;

// // import mongoose node package
// var mongoose = require('mongoose');
// // declare database connection variables
// var connection  = mongoose.createConnection('mongodb://35.154.199.83/library',
// function(err,db){
//     if(err)
//         console.log('err: '+err)
//     console.log('connected')
// });
// module.exports = connection;