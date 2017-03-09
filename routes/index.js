var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var db = require('../db');

// import schema
var Book = require('../schema');

/* GET home page. */
router.get('/', function(req, res, next) {

    var someBook = new Book({
        id: 1,
        title: '50 Shades of Gray',
        author: 'E. L. James',
        pages: 400,
        cover: '50_shades.pbg'
    })

    res.json(someBook)

    console.log(someBook)

});


module.exports = router;
