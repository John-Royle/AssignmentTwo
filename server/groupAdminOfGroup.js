const person = require('./Person.js');
const groupClass = require('./GroupClass.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

  /* Makes a specified user a group admin of a group.
   * Parameter: username: The user I wish to make the group admin.
   * Parameter: group: The specified group I wish the user to be the group admin of.
  */

  app.get('/server/groupAdminOfGroup', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    var group = req.query.group;

    var exists = false;


        fs.readFile('./server/users/' + uname, (err, data) => {
          if (err) {
            res.send({'username':uname, 'success':false});
          } else {
            let tempPerson = new person(null)
            tempPerson.loadFromFile(JSON.parse(decoder.write(data)));
            if (tempPerson.id === 0) {
              tempPerson.changeUserType(1);
              tempPerson.save(fs);
            }
            fs.readFile('./server/groups/' + group, (err, data) => {
              if (err) {
                res.send({'group':group, 'success':false});
              } else {
                let loadedGroup = new groupClass(null)
                loadedGroup.loadFromFile(JSON.parse(decoder.write(data)));
                if (loadedGroup.addAdmin(uname)) {
                  loadedGroup.save(fs);
                }
                }
              });
            };
          res.send({'username':uname, 'success':true});
        });





      });

  };
