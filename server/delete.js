const person = require('./Person.js')

function functionOne(res, tempPerson, result, db){
  if (result == null) {
    res.send({'username':"Not Found", 'success':false});
  } else {
    console.log("Hi prior to delete")
    tempPerson.deleteFromDB(db, res, functionTwo, tempPerson);
  }
}

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
