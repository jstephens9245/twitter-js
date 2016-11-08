const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/');

const app = express();

app.engine('html', nunjucks.render)
app.set('view engine', 'html');
// nunjucks.configure('views');
nunjucks.configure('views', { noCache: true })

app.use(volleyball);
app.use(express.static('public'));
app.use('/', routes);



app.listen(3000);
