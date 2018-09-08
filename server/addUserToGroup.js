const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

  /* Adds a user to the Group object.
   * Parameter: username: The user that I wish to add to a group.
   * Parameter: group: The group that I wish to add the user to.
  */

  app.get('/server/addUserToGroup', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username
    var group = req.query.group;


        fs.readFile('./server/users/' + uname, (err, data) => {
          if (err) {
            res.send({'username':uname, 'success':false});
          } else {
            let hello = new person(null)
            hello.loadFromFile(JSON.parse(decoder.write(data)));
            //make sure the group exists
            fs.readFile('./server/groups/' + group, (err, data) => {
              if (err){
                res.send({'group':group, 'success':false});
              }
              if (hello.addToGroup(group)) {
                hello.save(fs);
              }
            });

            };
          res.send({'username':uname, 'success':true});
        });



      });

  };
