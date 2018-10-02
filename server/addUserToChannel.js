const person = require('./Person.js');

function functionOne(res, tempPerson, result, db) {
  if (result == null) {
    res.send({'Username':"Not Found", 'success':false});
  } else {
    tempPerson.addChannel(tempPerson.channelToAdd);
    tempPerson.saveToDB(db, res, functionTwo, tempPerson);
  }
}

function functionTwo(res, tempPerson, err) {

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
    tempPerson.loadFromDB(uname, db, res, functionOne, tempPerson)


  });
};
