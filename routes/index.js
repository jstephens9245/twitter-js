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

router.use(function(resquest, response, next) {
  // console.log(chalk.blue("is anyone there?"));
  next();
})

router.use('/special/' , function(resquest, response, next) {
  // console.log(chalk.red("we've reached the special area yayayayayayay"));
  next();
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

module.exports = router;
