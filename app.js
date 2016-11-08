let express = require('express');
var app = express();

app.get("/", function(request, response) {
  response.send("Welcome to the twitter");
})

app.listen(3000);
