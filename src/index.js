"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    res.send('HELLO WORLD');
});
/*
connect to instance
create key
chmod 400 keys
then:
ssh -i "~/.ssh/saws-key-pair.pem" ec2-user@ec2-18-197-75-173.eu-central-1.compute.amazonaws.com
*/
app.listen(3000, function () {
    console.log('Start aplikacji na porcie 3000!');
});