// My SocketStream 0.3 app

var express = require('express'),
    path = require('path')

var port = 3000

var app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

console.log('server started on port ' + port)
app.listen(port)

