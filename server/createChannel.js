const groupClass = require('./GroupClass.js');
const {StringDecoder} = require('string_decoder');


module.exports = function(app,fs){

  /* Creates a channel and adds to the Group object.
   * Parameter: channelname: The channel that I wish to add to a group.
   * Parameter: group: The group that I wish to add the channel to.
  */

  app.get('/server/createChannel', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var channelname = req.query.channelname;
    var group = req.query.group;




            //make sure the group exists
      fs.readFile('./server/groups/' + group, (err, data) => {
        if (err){
          res.send({'group':group, 'success':false});
        }
        let group = new groupClass(null)
        group.loadFromFile(JSON.parse(decoder.write(data)));
        if (group.addChannelToGroup(channelname)) {
          group.save(fs);
          res.send({'channelname':channelname, 'success':true});
        } else {
          res.send({'channelname':channelname, 'success':true});
        }
      });

  });


  };
