const person = require('./Person.js');
var id = 1;

module.exports = function(app,fs, db){

  /* Adds a user to the Person object.
   * Parameter: username: The user that I wish to delete from the Person object.
   * Parameter: password: The password that I wish to add to the Person object.
   * Parameter: group: The group that I wish to add to the Person object.
  */
  app.get('/server/register', (req, res) => {
    var uname = req.query.username;
    var passw = req.query.password;
    var group = req.query.group;

    var exists = false;
    let Person = new person(0, uname, passw, group)
    console.log(Person)
    let tempFunction = (res, person, result) => {
      console.log(result);
      if (result != null) {
        res.send({'username':uname,'success':false});
      } else {

        res.send({'username':uname, 'success':true});
      }
    }
    Person.saveToDB(db, res, tempFunction, Person);


  });

}
