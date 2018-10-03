const person = require('./Person.js')

/* Callback function from after loading the person from the database.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: tempPerson: The person that has just been loaded.
 * Parameter: result: The result from the database. Null if not able to be found
 * Parameter: db: Acces to the database.
*/
function functionOne(res, tempPerson, result, db){
  if (result == null) {
    res.send({'username':"Not Found", 'success':false});
  } else {
    console.log("Hi prior to delete")
    tempPerson.deleteFromDB(db, res, functionTwo, tempPerson);
  }
}

/* Finalises the save and returns either a postive or negative result.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: person: The person that has just been loaded.
 * Parameter: err: Will be null if no errors..
 * Parameter: db: Acces to the database.
*/
function functionTwo(res, person, err, db){
  console.log("Got to Function Three");
  if (err == null) {
    res.send({'Username':"Not Deleted", 'success':false});
  } else {
    res.send({'Username':"Deleted", 'success':true});
  }
}

module.exports = function(app,fs, db){


  /* Deletes a user from the Person object.
   * Parameter: username: The user that I wish to delete from the Person object.
  */
  app.get('/server/delete', (req, res) => {


    var uname = req.query.username;
    let tempPerson = new person(null);
    tempPerson.loadFromDB(uname, db, res, functionOne, tempPerson);

  });

}
