const person = require('./Person.js')

module.exports = function(app,fs){

  app.get('/server/register', (req, res) => {
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    var passw = req.query.password;
    var group = req.query.group;

    console.log("This"+uname);
    //
    var exists = false;
    fs.readdir('./server/users/', (err, files)=> {
      files.forEach(file=> {
            console.log(file.toString()  + uname)
        if (file.toString() == uname) {
          exists = true;
        }
      })
      if (exists) {
        res.send({'username':uname,'success':false});
      } else {
        let hello = new person(0, uname, passw, group)
        hello.save(fs);

        res.send({'username':uname, 'success':true});
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
