const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');

/* Makes a specified user a super user.
 * Parameter: username: The name of the user I wish to make a super user.
*/
module.exports = function(app,fs){

  app.get('/server/makeSuper', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username;

    var exists = false;

        fs.readFile('./server/users/' + uname, (err, data) => {
          if (err) {
            res.send({'username':uname, 'success':false});
          } else {
            let tempPerson = new person(null)
            tempPerson.loadFromFile(JSON.parse(decoder.write(data)));
            if (tempPerson.id < 2) {
              tempPerson.changeUserType(2);
              tempPerson.save(fs);
            }
            };
          res.send({'username':uname, 'success':true});
        });



      });

  };
