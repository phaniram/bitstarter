#!/usr/bin/env node
var rest   = require('restler');
var grader = require('./grader.js');

grader.checkURL('http://still-shore-8008.herokuapp.com','checks.json');
rest.get("http://still-shore-8008.herokuapp.com").on('complete', function(result) {
    if (result instanceof Error) {
        console.log('Error: ' + result.message);
    } else {
        console.log(result);
    }
});