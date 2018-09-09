const person = require('./Person.js');
const groupClass = require('./GroupClass.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

  /* Gets a list of groups and channels that a user has access to.
   * Parameter: username: The user of the groups and channels that I wish to display.
  */

  app.get('/server/getGroupsAndChannels', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    let toReturn = {"groups":[]};

        fs.readFile('./server/users/' + uname, (err, data) => {
          if (err) {
            res.send({'username':uname, 'success':false});
          } else {
            let tempPerson = new person(null)
            tempPerson.loadFromFile(JSON.parse(decoder.write(data)));
            for (let i = 0; i < tempPerson.groups.length; i++) {
              let groupName = tempPerson.groups[i]
              let group = new groupClass(null);
              group.loadFromFile(JSON.parse(decoder.write(fs.readFileSync('./server/groups/' + groupName))));
              toReturn.groups.push(tempPerson.checkAllowedChannels(group));
            }
            };
          res.send({'username':uname, 'success':toReturn});
        });



      });

  };
