const person = require('./Person.js');
const groupClass = require('./GroupClass.js');

/* Callback function from after loading the person from the database.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: tempPerson: The person that has just been loaded.
 * Parameter: result: The result from the database. Null if not able to be found
 * Parameter: db: Acces to the database.
*/
const functionOne = function (res, tempPerson, result, db){
  if (result == null){
    res.send({'User':"Not Found", 'success':false});
  } else {
    tempPerson.groupInternal.loadFromDB(tempPerson.groupName, db, tempPerson.groupInternal, functionTwo, res);
  }

}

/* Finalises the save and returns either a postive or negative result.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: group: The group that has just been loaded.
 * Parameter: result: Will be null if no errors..
 * Parameter: db: Acces to the database.
*/
function functionTwo(res, group, result, db){
  if (result == null) {
    res.send({'group':"Not Found", 'success':false});
  } else {

  group.tempPerson.changeUserType(1);
  group.tempPerson.saveToDB(db, res, functionThree, group.tempPerson);
  }
}


function functionThree(res, tempPerson, result, db){
  console.log("Got to Function Three");
  if (result != null) {
    res.send({'Username':"Not Saved", 'success':false});
  } else {
    tempPerson.groupInternal.addAdmin(tempPerson.name);
    tempPerson.groupInternal.saveToDB(db, res, functionFour, tempPerson.groupInternal);
  }
}

function functionFour(res, group, err) {

  if (err != null) {
    res.send({'Group':"Not Saved", 'success':false});
  } else {
    res.send({'Username':"Now Admin", 'success':true});
  }

}

module.exports = function(app,fs,db){

  /* Makes a specified user a group admin of a group.
   * Parameter: username: The user I wish to make the group admin.
   * Parameter: group: The specified group I wish the user to be the group admin of.
  */

  app.get('/server/groupAdminOfGroup', (req, res) => {

    var uname = req.query.username;
    var group = req.query.group;

    let tempPerson = new person(null);
    tempPerson.groupInternal = new groupClass(null);
    tempPerson.groupInternal.tempPerson = tempPerson;
    tempPerson.groupName = group;
    tempPerson.loadFromDB(uname, db, res, functionOne, tempPerson);

  });

};
