const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

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
            let hello = new person(null)
            hello.loadFromFile(JSON.parse(decoder.write(data)));
            if (hello.addChannel(channel)) {
              hello.save(fs);
            }

            };
          res.send({'username':uname, 'success':true});
        });



      });

  };
