const express = require('express');
const router = express.Router();
const chalk = require('chalk');

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function(req, res) {
  res.sendFile('public/stylesheets/style.css');
})

router.get("/special", function(request, response) {
  response.send("Welcome to the special page, just for you, you special boy you");
})

router.get("/special/person", function(request, response) {
  response.send("Welcome special boy");
})

router.get("/news", function(request, response) {
  response.send("Welcome to the news page");
})
// router.get( '/users/:name', function (req, res) {
//   res.send( req.params.name ); // --> 'nimit'
// });

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  // console.log(list);
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  var tweetID = req.params.id
  console.log(tweetID);
  var oneTweet = tweetBank.find({id: Number(tweetID)});
  res.render('index', {tweets: oneTweet});
})

module.exports = router;
