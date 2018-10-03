const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');

/* Deletes a user from a channel in the Person object.
 * Parameter: username: The user that I wish to delete from a group.
 * Parameter: channelname: The channel that I wish deny access to the specified user.
*/

function functionOne(res, tempPerson, result, db) {
  if (result == null) {
    res.send({'username':"Not Found", 'success':false});
  } else {
    tempPerson.deleteChannel(tempPerson.channelName);
    tempPerson.saveToDB(db, res, functionTwo, tempPerson);
  }

}

function functionTwo(res, person, err, db) {
  if (err == null){
    res.send({'username':"Removed channel", 'success':true});
  } else {
    res.send({'username':"Unable to save", 'success':false});
  }
}



module.exports = function(app,fs, db){

  app.get('/server/deleteUserFromChannel', (req, res) => {


    var uname = req.query.username
    var channel = req.query.channelname;

    let tempPerson = new person(null)
    tempPerson.channelName = channel;

    tempPerson.loadFromDB(uname, db, res, functionOne, tempPerson);





      });

  };
