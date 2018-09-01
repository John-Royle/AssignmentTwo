module.exports = function(app, io, fs){
  console.log("Server Socket Initialised");


  var chat = [];

  fs.readdir('./server/rooms/', (err, files)=> {
    files.forEach(file=> {

      chat.push(io.of('/' + file)
                    .on('connection', function(socket){
                      console.log("Room "+ file +" Connection")
                      socket.on('add-message',(message) =>{
                        console.log(message);
                        socket.emit('message',{type:'message',text:message+file});
                      });
                    }))

    })
  })

  /*= io.of('/Room1')
                .on('connection', function(socket){
                  console.log("Room 1 Connection")
                  socket.on('add-message',(message) =>{
                    console.log(message);
                    socket.emit('message',{type:'message',text:message+"Room1"});
                  });
                });*/

  /*var hello = io.of('/Room2')
                .on('connection', function(socket){
                  console.log("Room 2 Connection")
                  socket.on('add-message',(message) =>{
                    console.log(message);
                    socket.emit('message',{type:'message',text:message+"Room2"});
                  });
                });*/


//
//   var room1 = io.of('/roomOne');
//   room1.on('connection', function(socket) {
//     console.log('user connection Room 1');
//     room1.on('add-message', (message) => {
//       //message = message + " from room One";
//       //console.log(message);
//       io.of('/roomOne').emit('message',{type:'message', text:message})
//     });
//   //io.emit('message',{type:'message',text:"Connected to Room 2"});
// });
//
//   var room2 = io.of('/roomTwo');
//   room1.on('connection', function(socket) {
//   io.emit('message',{type:'message',text:"Connected to Room 2"});
//
//
// })

/*io.on('connection', function(socket) {
  socket.join('Room1', () => {
    //  io.to('Room1',"A new User has joined the room");
io.to('Room1').emit('message',{type:'message',text:"A new user has joined the room"});
  console.log('user connection Room 1');
socket.on('add-message',(message) =>{
io.to('Room1').emit('message',{type:'message',text:message+"Room1"});
});
  });
});*/

// io.on('connection', function(socket) {
//   socket.join('Room2', () => {
//     //  io.to('Room1',"A new User has joined the room");
// io.to('Room2').emit('message',{type:'message',text:"A new user has joined the room"});
//   console.log('user connection Room 2');
// socket.on('add-message',(message) =>{
// io.to('Room1').emit('message',{type:'message',text:message+"Room2"});
// });
//   });
// });

  /*io.on('connection',(socket) => {
    console.log('user connection');
    socket.on('disconnect', function(){
      console.log('user disconnection');
  });

  socket.on('add-message',(message) =>{
    io.emit('message',{type:'message',text:message});

    });
  });*/
};
