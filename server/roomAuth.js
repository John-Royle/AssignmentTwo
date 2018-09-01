module.exports = function(app, fs, io) {

  app.get('/server/roomAuth', (req, res) => {
    var uname = req.query.username;
    var rname = req.query.roomname;

    var hello = io.of('/' + rname)
                  .on('connection', function(socket){
                    console.log("Sam's Magic Room")
                    socket.on('add-message',(message) =>{
                      console.log(message);
                      socket.emit('message',{type:'message',text:message+"Sam's Magic Room"});
                    });
                  });

    console.log(rname);
    var userObj;

    fs.readFile('server/'+ rname+'.json', 'utf8', function(err, data){
      if (err) {
        //console.log(err);
        res.send({'username':'','success':false});
      } else {
        userObj = JSON.parse(data);
        for (let i=0;i<userObj.length;i++) {
          if (userObj[i].name == uname) {
            res.send({'username':uname,'success':true});
            return;
          }

        }
        res.send({'username':uname,'success':false});
    }
});
});
}
