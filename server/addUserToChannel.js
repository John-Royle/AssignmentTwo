const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

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

        fs.readFile('./server/users/' + uname, (err, data) => {
          if (err) {
            res.send({'username':uname, 'success':false});
          } else {
            let tempPerson = new person(null)
            tempPerson.loadFromFile(JSON.parse(decoder.write(data)));
            if (tempPerson.addChannel(channel)) {
              tempPerson.save(fs);
            }

            };
          res.send({'username':uname, 'success':true});
        });



      });

  };
