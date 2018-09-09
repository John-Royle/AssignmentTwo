const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');

/* Deletes a user from a channel in the Person object.
 * Parameter: username: The user that I wish to delete from a group.
 * Parameter: channelname: The channel that I wish deny access to the specified user.
*/
module.exports = function(app,fs){

  app.get('/server/deleteUserFromChannel', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username
    var channel = req.query.channelname;
    console.log("Channel got called")

        fs.readFile('./server/users/' + uname, (err, data) => {
          if (err) {
            res.send({'username':uname, 'success':false});
          } else {
            let tempPerson = new person(null)
            tempPerson.loadFromFile(JSON.parse(decoder.write(data)));
            if (tempPerson.deleteChannel(channel)) {
              tempPerson.save(fs);
            }

            };
          res.send({'username':uname, 'success':true});
        });



      });

  };
