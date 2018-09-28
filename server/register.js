const person = require('./Person.js');
var id = 1;

module.exports = function(app,fs, db){

  /* Adds a user to the Person object.
   * Parameter: username: The user that I wish to delete from the Person object.
   * Parameter: password: The password that I wish to add to the Person object.
   * Parameter: group: The group that I wish to add to the Person object.
  */
  app.get('/server/register', (req, res) => {
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    var passw = req.query.password;
    var group = req.query.group;

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
        let tempPerson = new person(id, uname, passw, group)
        id += 1;
        tempPerson.save(fs);

        res.send({'username':uname, 'success':true});
      }
    })


  });

}
