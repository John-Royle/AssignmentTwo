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
    tempPerson.deleteChannel(tempPerson.channelName);
    tempPerson.saveToDB(db, res, functionTwo, tempPerson);
  }

}

/* Finalises the save and returns either a postive or negative result.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: person: The person that has just been loaded.
 * Parameter: result: Will be null if no errors..
 * Parameter: db: Acces to the database.
*/
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
