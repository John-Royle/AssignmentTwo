const groupClass = require('./GroupClass.js')

module.exports = function(app,fs){

  app.get('/server/registerGroup', (req, res) => {
    var isUser =0;
    var userObj;

    //var uname = req.query.username;
    //var passw = req.query.password;
    console.log("Is the error here?");
    var group = req.query.group;

    console.log("This"+group);
    //
    var exists = false;
    fs.readdir('./server/groups/', (err, files)=> {
      files.forEach(file=> {
            console.log(file.toString()  + group)
        if (file.toString() == group) {
          exists = true;
        }
      })
      if (exists) {
        res.send({'group':group,'success':false});
      } else {
        console.log("This bit")
        let hello = new groupClass(0, group, 'SomeChannel')
        hello.save(fs);

        res.send({'group':group, 'success':true});
      }
    })





    /*fs.readFile('server/users.json','utf-8', function(err, data) {
      if (err) {
        console.log(err);
      } else {

        userObj = JSON.parse(data);
        for (let i=0;i<userObj.length;i++) {
          if (userObj[i].name == uname) {
            isUser = 1;
          }
      }
      if (isUser > 0) {
        console.log("made it to doesnt exist");
        res.send({'username':'','success':false});
      } else {
        userObj.push({'name':uname});
        var newdata = JSON.stringify(userObj);
        fs.writeFile('server/users.json',newdata,'utf-8',function(err){
          if (err) throw err;
          res.send({'username':uname,'success':true});
        });
      }

      }

    });*/

  });

}
