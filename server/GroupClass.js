module.exports = class GroupClass {

  /* Constructor for the GroupClass class.
   * Parameter: id: The id (not compulsory) of the user I wish to make group admin of a specified group.
   * Parameter: name: The name of the user I wish to make group admin of a specified group.
   * Parameter: channel: The name of a channel that belongs to a specified group.
  */
  constructor(id, name, channel) {
    if (id === null) {
      return;
    }
    this.id = id;
    this.name = name;
    this.channel = [];
    this.channel.push(channel);
    this.admins = [];
    this.admins.push("super");

  }

  deleteFromDB(db, res, callback, group){
    let query = {name: this.name};
    //console.log("Callback time");
    db.collection("Groups").deleteOne(query,function(err, result){
      //console.log("Callback time");
      //console.log(result)
      if (err) {
        console.log(err)
      }
      //console.log(result);
      if (result != null) {
        if (result.result.n > 0) {
          callback(res, group, result, db);
        } else {
          callback(res, group, null, db);
        }
      } else {
        callback(res, group, null, db);
      }
    });

  }

  /* Takes in a json object created from a file bearing the name of the object. Takes the objects from that json object and applies it to itself.
   * Parameter: save: The json replresentation of this class.
  */
  loadFromFile(save) {
    this.id = save.id;
    this.name = save.name;
    this.channel = save.channel;
    this.admins = save.admins;
  }

  /* Adds a user to the Group Admin array.
   * Parameter: admin: The name of the user I wish to make group admin of a specified group.
  */



  saveToDB(db, res, callback, group){

    db.collection("Groups").findOneAndUpdate({name: this.name},{$set: {name: this.name, channel : this.channel, admins: this.admins}},{upsert: true},function(err, result){
      if (err) {
        console.log(err)
        callback(res, group, err);
      }
      callback(res, group, null);
    })
  }

  setValues(result){
    //console.log(result);
    this.name = result.name;
    this.channel = result.channel;
    this.admins = result.admins;
  }

  loadFromDB(name, db, group, callback,res ) {
    let set = this.setValues.bind(this);
    db.collection("Groups").findOne({name: name}, function(err, result){
        if (err) {
          console.log(err)
        }
        console.log(result);
        if (result != null) {
          //this.name = result.name;
          set(result);
          callback(res, group, result, db);
        } else {
          callback(res, group, null, db);
        }
      });

  }








  addAdmin(admin) {
    for (let i = 0; i < this.admins.length; i ++) {
      if (this.admins[i] === admin) {
        return false;
      }
    }
    this.admins.push(admin);
    return true;
  }

  /* Adds channel to the Channel array.
   * Parameter: channel: The name of the channel I wish to add to a specified group.
  */
  addChannelToGroup(channel) {
    for (let i = 0; i < this.channel.length; i ++) {
      if (this.channel[i] === channel) {
        return false;
      }
    }
    this.channel.push(channel);
    return true;
  }

  /* Deletes a file if it exists and saves this class into the file system.
   * Parameter: fs: The filesystem object provided by node.
  */
  save(fs) {

    let path = './server/groups/' + this.name;

    fs.unlink(path, (err) => {
      if (err) {
        console.log("group doesn't exist");
      }
      fs.writeFile(path, JSON.stringify(this), function(err) {
        if(err) {
          console.log("Couldn't write");
        }
      })
    })
  }

}
