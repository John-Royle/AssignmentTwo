const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');

function functionOne(res, tempPerson, result, db) {
  if (result == null) {
      res.send({'username':"Not Found", 'success':false});
  } else {
    tempPerson.deleteFromGroup(tempPerson.groupName);
    tempPerson.saveToDB(db, res, functionTwo, tempPerson);
  }

}

function functionTwo(res, person, err, db) {

  if (err != null){
    res.send({'username':"Not able to save", 'success':false});
  } else {
    res.send({'username':"Removed from group", 'success':true});
  }
}




module.exports = function(app,fs,db){


  /* Removes access to the Group of a specified user.
   * Parameter: username: The user that I wish to deny access to the specified group.
   * Parameter: group: The group that I wish deny access to the specified user.
  */

  app.get('/server/deleteUserFromGroup', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    var group = req.query.group;

    let tempPerson = new person(null)
    tempPerson.groupName = group;
    tempPerson.loadFromDB(uname, db, res, functionOne, tempPerson);


      });

  };
