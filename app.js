var gulp = require('gulp');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) { 

  socket.emit('news', { hello: 'world' }); //Event 'news' send to someone

  socket.on('my other event', function (data) {
    console.log(data);
  });

  socket.on('disconnect', function(){
    io.emit('user disconnected');
  });

}); 
      
