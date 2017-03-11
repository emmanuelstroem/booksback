var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var validator = require('validator');

// load the database connector
var db = require('../db');

// get list of all authors
router.get('/', function(req, res, next) {

    db.query('SELECT id, firstname, lastname, address from author', function(err, allAuthors){
            if(err){
                console.log(err);
            }else{
                // console.log(rows);
                res.json(allAuthors);
            }
    });

});

// add author
router.post('/add', function(req, res, next){
    // user inout variables
    var firstname = validator.trim(req.body.firstname),
        lastname = validator.trim(req.body.lastname),
        address = validator.trim(req.body.address);

    db.query({
        // insert query with user values
        sql: 'INSERT INTO author (firstname, lastname, address) VALUES(?, ?, ?)',
        // escape input values for SQL inections
        values: [validator.toString(firstname), validator.toString(lastname), validator.toString(address)]
    }, function(err, row, fields){
        if(err){
            console.log('author insert failed: '+err.stack);
            res.json({message: 'failed', err: err.stack});
        }else{
            console.log('author added')
            res.json({meesage: 'author added with id: ' + row.insertId});
        }

    })

});

// get single author details
router.get('/:id', function(req, res, next){
    var authorid = validator.toInt(req.params.id);

    db.query('SELECT id, firstname, lastname, address FROM author WHERE bk.id = ?', authorid,
     function(err, singleAuthor){
        if(err){
            console.log('SQL ERR: '+err.stack);
        }else{
            // console.log(timestamp)
            res.json(singleAuthor);
        }
    })

});

// edit author details
router.put('/:id', function(req, res, next){
    var firstname = validator.trim(req.body.firstname),
        lastname = validator.trim(req.body.lastname),
        address = validator.trim(req.body.address);

    db.query({
        sql: 'UPDATE author SET firstname=?, lastname=?, address=?  WHERE id=?',
        values: [validator.escape(firstname), validator.escape(lastname), validator.escape(address)]

    },function(err,result){
        if(err){
            console.log('edit failed: '+err.stack);
        }else{
            console.log('author edited.');
        }
    })
});

// delete author
router.delete('/:id', function(req, res, next){
    var authorid = validator.escape(req.params.id);

    db.query('DELETE FROM author where id=?', validator.toInt(authorid), function(err, row){
        if(err){
            res.json({message: 'failed', error: err.stack});
        }else{
            console.log('author deleted');
            res.json({message: 'success', status: 'Author Deleted'});
        }
    });
});


module.exports = router;