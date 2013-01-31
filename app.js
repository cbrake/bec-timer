// Copyright Cliff Brake <cbrake@bec-systems.com>, GPL v3

var express = require('express'),
    path = require('path')

var port = 3000

var app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

var port_ = process.env.VCAP_APP_PORT || port

console.log('server started on port ' + port_)
app.listen(port_)

