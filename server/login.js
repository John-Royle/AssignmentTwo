const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

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
