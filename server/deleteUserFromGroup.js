const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');

/* Callback function from after loading the person from the database.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: tempPerson: The person that has just been loaded.
 * Parameter: result: The result from the database. Null if not able to be found
 * Parameter: db: Acces to the database.
*/
function functionOne(res, tempPerson, result, db) {
  if (result == null) {
      res.send({'username':"Not Found", 'success':false});
  } else {
    tempPerson.deleteFromGroup(tempPerson.groupName);
    tempPerson.saveToDB(db, res, functionTwo, tempPerson);
  }

}

/* Finalises the save and returns either a postive or negative result.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: person: The person that has just been loaded.
 * Parameter: err: Will be null if no errors.
 * Parameter: db: Acces to the database.
*/
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
