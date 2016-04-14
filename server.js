var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var messages = require('./routes/messages');
var app = new (require('express'))();
var connectionString = require('./mongoConf');
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

mongoose.connect(connectionString);

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', messages);

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});