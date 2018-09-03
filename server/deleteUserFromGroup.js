const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

  app.get('/server/deleteUserFromGroup', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username;
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
              if (hello.deleteFromGroup(group)) {
                hello.save(fs);
                res.send({'username':uname, 'success':true});
              } else {
                res.send({'username':uname, 'success':false});
              }
            });

            };

        });



      });

  };
