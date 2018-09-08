const person = require('./Person.js');
const groupClass = require('./GroupClass.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

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
            let user = new person(null)
            user.loadFromFile(JSON.parse(decoder.write(data)));
            for (let i = 0; i < user.groups.length; i++) {
              let groupName = user.groups[i]
              let group = new groupClass(null);
              group.loadFromFile(JSON.parse(decoder.write(fs.readFileSync('./server/groups/' + groupName))));
              toReturn.groups.push(user.checkAllowedChannels(group));
              console.log("ReadSync done")
            }


            };
          res.send({'username':uname, 'success':toReturn});
        });



      });

  };
