var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

app.listen(5500, function () {
    console.log('Calculator Dev Server listening on port 5500!');
});
