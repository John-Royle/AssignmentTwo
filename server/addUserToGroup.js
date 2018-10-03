const person = require('./Person.js');
const groupClass = require('./GroupClass.js');

/* Callback function from after loading the person from the database.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: tempPerson: The person that has just been loaded.
 * Parameter: result: The result from the database. Null if not able to be found
 * Parameter: db: Acces to the database.
*/
const functionOne = function (res, tempPerson, result, db){

  if (result == null) {
    res.send({'username':"Not Found", 'success':false});
  } else {
    //console.log("Got to Function One");
  let group = new groupClass(null);
  group.personTemp = tempPerson;
  group.loadFromDB(tempPerson.groupTemp, db, group, functionTwo, res)
  //console.log(group);
  //console.log(group.personTemp);
  }
}

/* Callback to complete add to group functionality.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: group: The group that has just been loaded.
 * Parameter: result: Will be null if no errors.
 * Parameter: db: Acces to the database.
*/
function functionTwo(res, group, result, db){
  if (result == null) {
    res.send({'group':"Not Found", 'success':false});
  } else {

  group.personTemp.addToGroup(group.name);
  group.personTemp.saveToDB(db, res, functionThree, group.personTemp);
  }
}

/* Finalises the save and returns either a postive or negative result.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: tempPerson: The person that has just been loaded.
 * Parameter: result: Will be null if no errors..
 * Parameter: db: Acces to the database.
*/
function functionThree(res, tempPerson, result, db){
  console.log("Got to Function Three");
  if (result != null) {
    res.send({'Username':"Not Saved", 'success':false});
  } else {
    res.send({'Username':tempPerson.name, 'success':true});
  }
}


module.exports = function(app,fs, db){

  /* Adds a user to the Group object.
   * Parameter: username: The user that I wish to add to a group.
   * Parameter: group: The group that I wish to add the user to.
  */

  app.get('/server/addUserToGroup', (req, res) => {
    console.log("Got to Add User");
    var uname = req.query.username
    var group = req.query.group;


    let Person = new person(null);
    Person.groupTemp = group;

    Person.loadFromDB(uname, db, res, functionOne, Person)

  });


  };
