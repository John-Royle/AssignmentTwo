const user = 0;
const groupUser = 1;
const superUser = 2;

module.exports = class Person {

  /* Constructor for the Person class.
   * Parameter: id: The id (not compulsory) of the specified user.
   * Parameter: name: The name of the specified user.
   * Parameter: passw: The password of the specified user.
   * Parameter: group: The group name of a group that belongs to a specified user.
  */
  constructor(id, name, passw, group) {

    if (id === null) {
      return;
    }

    this.id = id;
    this.name = name;
    this.passw = passw;
    this.groups = [];
    this.groups.push(group);
    this.userType = user;
    this.channels = [];

  }
  /* Takes in a json object created from a file bearing the name of the object. Takes the objects from that json object and applies it to itself.
   * Parameter: save: The json replresentation of this class.
  */
  loadFromFile(save) {
    this.id = save.id;
    this.name = save.name;
    this.passw = save.passw;
    this.groups = save.groups;
    this.userType = save.userType;
    this.channels = save.channels;

  }

  saveToDB(db){

    db.collection("Users").findOneAndUpdate({name: this.name},{$set: {name: this.name, passw: this.passw, groups: this.groups, userType: this.userType, channels: this.channels}},{upsert: true},function(err, result){
      if (err) {
        console.log(err)
      }
      //console.log(result);
    })
  }

  setValues(result){
    //console.log(result);
    this.name = result.name;
    this.passw = result.passw;
    this.groups = result.groups;
    this.userType = result.userType;
    this.channels = result.channels;
  }

  loadFromDB(name, db, res, callback, tempPerson) {
    let set = this.setValues.bind(this);
    db.collection("Users").findOne({name: name}, function(err, result){
        if (err) {
          console.log(err)
        }
        //console.log(result.name);
        if (result != null) {
          //this.name = result.name;
          set(result);
          callback(res, tempPerson);

        }
      });

  }


/*
  db.collection('products').insert( { id: 4, name: "clothes", price: 41.00, type: "small", description: "Fine clothes" }, function(err, res){
    if (err) throw err;
    console.log("New Item created");
  });
*/

  /* Adds a channel to the channels array.
   * Parameter: channel: The name of the channel I wish to add to the specified user.
  */
  addChannel(channel) {
    for (let i = 0; i < this.channels.length; i ++) {
      if (this.channels[i] === channel) {
        return false;
      }
    }
    this.channels.push(channel);
    return true;
  }

  /* Adds a group to the groups array.
   * Parameter: group: The name of the group I wish to add to the specified user.
  */
  addToGroup(group) {
    for (let i = 0; i < this.groups.length; i ++) {
      if (this.groups[i] === group) {
        return false;
      }
    }
    this.groups.push(group);
    return true;
  }

  /* Deletes a group to the groups array.
   * Parameter: group: The name of the group I wish to delete from the specified user.
  */
  deleteFromGroup(group) {
    for (let i = 0; i < this.groups.length; i ++) {
      if (this.groups[i] === group) {
        this.groups.splice(this.groups.indexOf(group), 1);
        return true;
      }
    }

    return false;
  }

  /* Compares the group's channels with this object's own channels. Returns the list of matching channels.
   * Parameter: group: The name of the group that I am comparing it to.
  */
  checkAllowedChannels(group){
    let toReturn = {"GroupName":group.name, "channels": []}
    for (let i = 0; i < this.channels.length; i++){
      for (let j = 0; j < group.channel.length; j++) {
        if (this.channels[i] === group.channel[j]){
          toReturn.channels.push(this.channels[i]);
        }
      }
    }
    return toReturn;
  }

  /* Deletes a channel from the channels array.
   * Parameter: channel: The name of the channel I wish to delete from the specified user.
  */
  deleteChannel(channel) {
    for (let i = 0; i < this.channels.length; i ++) {
      if (this.channels[i] === channel) {
        this.channels.splice(this.channels.indexOf(channel), 1);
        return true;
      }
    }

    return false;
  }

  /* Changes the userType number of a specified user.
   * Parameter: newType: The number of the new type I wish a user to have (super user etc).
  */
  changeUserType(newType) {
    this.userType = newType;
  }

  save(fs) {

    let path = './server/users/' + this.name;

    fs.unlink(path, (err) => {
      if (err) {
        console.log("user didn't exist");
      }
      fs.writeFile(path, JSON.stringify(this), function(err) {
        if(err) {
          console.log("Couldn't write");
        }
      })
    })
  }

}
