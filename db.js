/**
 * Created by emmanuel on 08/03/2017.
 */

// import mysql node package
var mongoose = require('mongoose');

// declare database connection variables

var connection  = mongoose.createConnection('mongodb://35.154.199.83/library',
function(err,db){
    if(err)
        console.log('err: '+err)
    console.log('connected')
});


module.exports = connection;