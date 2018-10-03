const groupClass = require('./GroupClass.js');

/* Callback function from after loading the person from the database.
 * Parameter: res: Return function for sending the results back to the client.
 * Parameter: group: The group that has just been loaded.
 * Parameter: result: The result from the database. Null if not able to be found
 * Parameter: db: Acces to the database.
*/
function functionOne(res, group, result, db){
  if (result == null) {
    res.send({'Group':"Not Found", 'success':false});
  } else {
    group.addChannelToGroup(group.ChannelToAdd);
    group.saveToDB(db, res, functionTwo, group);
  }
}

function functionTwo(res, group, result, db){
  if (result != null) {
    res.send({'Channel':"Not Saved", 'success':false});
  } else {
    res.send({'Group':group.name, 'success':true});
  }
}

module.exports = function(app,fs, db){

  /* Creates a channel and adds to the Group object.
   * Parameter: channelname: The channel that I wish to add to a group.
   * Parameter: group: The group that I wish to add the channel to.
  */
  app.get('/server/createChannel', (req, res) => {

    var channelname = req.query.channelname;
    var groupName = req.query.group;

    let group = new groupClass(null)
    group.ChannelToAdd = channelname;
    group.loadFromDB(groupName, db, group, functionOne,res);
  });


  };
