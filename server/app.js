const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.post('/next', function(req, res){
    
  });

io.on('connection', function(socket){
    socket.on('next image', function(active, next){
        io.emit('next image', active, next);
      });

      socket.on('prev image', function(active, prev){
        io.emit('prev image', active, prev);
      });
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});