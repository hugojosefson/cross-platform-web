#!/usr/bin/env node
/* jshint node: true */
'use strict';

var colors = require('colors');
var path = require('path');
var express = require('express');
var app = express();

var port = 3000 || process.env.PORT;
var staticDir = path.resolve(__dirname + '/../client');

app.use(express.static(staticDir));
app.listen(port);

console.log('Serving ' + staticDir + ' on http://localhost:' + port + '/');