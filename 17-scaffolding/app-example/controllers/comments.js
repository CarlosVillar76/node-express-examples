var express = require('express')
  , router = express.Router()

var Comments = require('../models/comments')

router.get('/all', function(req, res) {
  Comments.all(function(err, docs) {
    //if (err) throw err;
    res.render('comments', {comments: docs})
    // res.send("Hello")
  })
})

router.get('/recent', function(req, res) {
  Comments.recent(function(err, docs) {
    // if (err) throw err;
    res.render('comments', {comments: docs})
  })
})

module.exports = router