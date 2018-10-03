const person = require('./Person.js');


/* Callback function from after loading the person from the database.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: tempPerson: The person that has just been loaded.
 * Parameter: result: The result from the database. Null if not able to be found
 * Parameter: db: Acces to the database.
*/
function afterLoadFromDB(res, tempPerson, result, db) {
  if (result == null) {
    res.send({'Username':"Not Found", 'success':false});
  } else {
    tempPerson.addChannel(tempPerson.channelToAdd);
    tempPerson.saveToDB(db, res, afterSaveToDB, tempPerson);
  }
}

function afterSaveToDB(res, tempPerson, err) {

  if (err != null) {
    res.send({'Username':"Not Saved", 'success':false});
  } else {
    res.send({'Username':tempPerson.name, 'success':true});
  }

}

module.exports = function(app,fs, db){

  /* Adds a channel to the Person object.
   * Parameter: username: The user that I wish to add a channel to.
   * Parameter: channelname: The channel that I wish to add to the user.
  */
  app.get('/server/addUserToChannel', (req, res) => {


    var uname = req.query.username
    var channel = req.query.channelname;

    let tempPerson = new person(null)
    tempPerson.channelToAdd = channel;
    tempPerson.loadFromDB(uname, db, res, afterLoadFromDB, tempPerson)


  });
};
