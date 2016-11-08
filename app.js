const express = require('express');
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/');

const app = express();

let people = [
    { name: 'Joe Stephens' },
    { name: 'Tom' }

  ];

app.engine('html', nunjucks.render)
app.set('view engine', 'html');
// nunjucks.configure('views');
nunjucks.configure('views', { noCache: true })

app.use(volleyball);
app.use(express.static('public'));
app.use('/', routes);


app.use(function(resquest, response, next) {
  console.log(chalk.blue("is anyone there?"));
  next();
})
app.use('/special/' , function(resquest, response, next) {
  console.log(chalk.red("we've reached the special area yayayayayayay"));
  next();
})

// app.get("/", function(request, response) {
//   response.render('index', { title: "Welcome to the twitter", people: people })
// } )
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
