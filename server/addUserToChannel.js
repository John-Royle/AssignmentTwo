const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs, db){

  /* Adds a channel to the Person object.
   * Parameter: username: The user that I wish to add a channel to.
   * Parameter: channelname: The channel that I wish to add to the user.
  */
  app.get('/server/addUserToChannel', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username
    var channel = req.query.channelname;
    console.log("Channel got called")

    let tempPerson = new person(null)
    tempPerson.loadFromDB(uname,db)
    if (tempPerson.name == null) {
      res.send({'username':uname, 'success':false});
    } else {
      if (tempPerson.addChannel(channel)) {
        tempPerson.saveToDB(db);
      }
      res.send({'username':uname, 'success':true});
    }

  });
};
