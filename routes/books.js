var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var db = require('../db');

// import schema
var Book = require('../schema');

var collection = db.collection('library');

/* GET users listing. */
router.get('/', function(req, res, next) {


    collection.find({}).toArray(function(err, books){
        console.log('all books: '+ books)

        res.json(books)
    });

});

router.post('/add', function(req, res, next){

    var addBook = new Book({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        cover: 'hahhaa.png'

    });

    collection.insert(addBook)

    res.json(addBook)

    // console.log(addBook);

});

router.get('/:id', function(req, res, next){
    console.log(req.params.id)

    collection.findOne({},'', function (err, book) {
        res.json(book)
    })
});

module.exports = router;
