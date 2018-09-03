const person = require('./Person.js');
const groupClass = require('./GroupClass.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

  app.get('/server/groupAdminOfGroup', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    var group = req.query.group;



    //console.log("This"+uname);
    //console.log("This"+group);
    //
    var exists = false;


        fs.readFile('./server/users/' + uname, (err, data) => {
          if (err) {
            res.send({'username':uname, 'success':false});
          } else {
            let hello = new person(null)
            hello.loadFromFile(JSON.parse(decoder.write(data)));
            if (hello.id === 0) {
              hello.changeUserType(1);
              hello.save(fs);
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
