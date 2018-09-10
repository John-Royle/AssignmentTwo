module.exports = function(app, io, fs){
  console.log("Server Socket Initialised");


  var chat = [];

  fs.readdir('./server/rooms/', (err, files)=> {
    files.forEach(file=> {

      chat.push(io.of('/' + file)
                    .on('connection', function(socket){
                      socket.on('add-message',(message) =>{    
                        socket.emit('message',{type:'message',text:message+file});
                      });
                    }))

    })
  })

};
