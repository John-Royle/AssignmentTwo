const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

  /* Checks to see if a specified user exists and returns their user type if true.
   * Parameter: username: The name of the user I wish to check if exists.
  */
  app.get('/server/login', (req, res) => {
    const decoder = new StringDecoder('utf8');

    var uname = req.query.username

        fs.readFile('./server/users/' + uname, (err, data) => {
          if (err) {
            res.send({'username':uname, 'success':false});
          } else {
            let tempPerson = new person(null)
            tempPerson.loadFromFile(JSON.parse(decoder.write(data)));
            res.send({'username':uname, 'success':true, 'type': tempPerson.userType});
            };

        });

      });

  };
