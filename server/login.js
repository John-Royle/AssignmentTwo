const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs, db){

  /* Checks to see if a specified user exists and returns their user type if true.
   * Parameter: username: The name of the user I wish to check if exists.
  */
  app.get('/server/login', (req, res) => {

    var uname = req.query.username
    var passw = req.query.password

    let tempPerson = new person(null);

    let tempFunction = (res, tempPerson, result, db) => {

    if (tempPerson.name == null){
      res.send({'username':uname,'success':false});
    } else {
        tempPerson.sam = "Yes Please";

        console.log(tempPerson);
      if (tempPerson.name == uname && tempPerson.passw == passw) {
        res.send({'username':uname, 'success':true, 'type': tempPerson.userType});
      } else {
        res.send({'username':uname,'success':false});
      }
    }
  }
    tempPerson.loadFromDB(uname, db, res,tempFunction, tempPerson)
  });

  };
