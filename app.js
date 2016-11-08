let express = require('express');
let chalk = require('chalk');
let volley = require('volleyball');
var app = express();

app.use(volley);
app.use(function(resquest, response, next) {
  console.log(chalk.blue("is anyone there?"));
  next();
})
app.use('/special/' , function(resquest, response, next) {
  console.log(chalk.red("we've reached the special area yayayayayayay"));
  next();
})

app.get("/", function(request, response) {
  response.send("Welcome to the twitter");
})
app.get("/special", function(request, response) {
  response.send("Welcome to the special page, just for you, you special boy you");
})
app.get("/special/person", function(request, response) {
  response.send("Welcome special boy");
})
app.get("/news", function(request, response) {
  response.send("Welcome to the news page");
})
app.listen(3000);
