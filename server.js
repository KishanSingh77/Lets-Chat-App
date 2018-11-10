const express = require('express');
const path = require('path');
const http = require('http');
var app = express();
const publicPath = path.join(__dirname, './public/index.html');
const port = process.env.PORT || 3000;
var socketIO = require('socket.io');



app.use(express.static(publicPath));


console.log(publicPath);

app.get('/',function (req, res)  {

    res.sendFile(publicPath);

});

var server = http.createServer(app).listen(3000);

var io = socketIO(server).listen(server);

io.on('connection' , (socket)=>{

     console.log('New user connected');
    
     socket.on('disconnect' , ()=>{console.log('User disconnected');
     });
});


