var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var validator = require('validator');

var db = require('../db');

var currentTime = new Date();
var timestamp = currentTime.toUTCString();


/* GET books listing. */
router.get('/', function(req, res, next) {

    db.query('SELECT b.id, b.title, b.pages, b.cover, a.firstname, a.lastname from book b INNER JOIN author a ON b.author_id = a.id',
        function(err, rows){
            if(err){
                console.log(err);
            }else{
                // console.log(rows);
                res.json(rows);
            }
    });

});

// add new book
router.post('/add', function(req, res, next){
    // user inout variables
    var title = validator.trim(req.body.title),
        pages = validator.toInt(req.body.pages),
        cover = validator.trim(req.body.cover),
        author_id = validator.toInt(req.body.author_id);

    db.query({
        // insert query with user values
        sql: 'INSERT INTO book (title,pages, author_id, cover) VALUES(?, ?, ?, ?)',
        values: [validator.escape(title), pages, author_id, validator.escape(cover)]
    }, function(err, row, fields){
        if(err){
            console.log('insert failed: '+err.stack);
        }else{
            console.log('book added: ' + row.insertId)
            res
        }

    })

});

//get single book details
router.get('/:id', function(req, res, next){
    var bookid = validator.trim(req.params.id);

    db.query('SELECT bk.id, bk.title, bk.pages, bk.cover, au.firstname, au.lastname\
     FROM book bk INNER JOIN author au ON bk.author_id = au.id WHERE bk.id = ?', validator.toInt(bookid),
     function(err, rows){
        if(err){
            console.log('SQL ERR: '+err.stack);
        }else{
            console.log(timestamp)
            res.json(rows);
        }
    })

});

// edit book details
router.put('/:id', function(req, res, next){
    var title = validator.trim(req.body.title),
        pages = validator.trim(req.body.pages),
        cover = validator.trim(req.body.cover),
        author_id = validator.trim(req.body.author_id),
        bookid = validator.trim(req.params.id);

    db.query({
        sql: 'UPDATE book SET title=?, pages=?, cover=?, author_id=? WHERE id=?',
        values: [validator.ltrim(title), validator.toInt(pages), validator.ltrim(cover), validator.toInt(author_id), validator.toInt(bookid)] },
    function(err,result){
        if(err){
            console.log('edit failed: '+err.stack);
        }else{
            console.log('book edited.');
        }
    })
});

// delete book from database
router.delete('/:id', function(req, res, next){
    var bookid = validator.escape(req.params.id);

    db.query('DELETE FROM book where id=?', validator.toInt(bookid), function(err, row){
        if(err){
            res.json({message: 'failed', error: err.stack});
        }else{
            console.log('book deleted');
            res.json({message: 'success', status: 'Book Deleted'});
        }
    });
});


module.exports = router;
