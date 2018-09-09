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

  loadFromFile(save) {
    this.id = save.id;
    this.name = save.name;
    this.passw = save.passw;
    this.groups = save.groups;
    this.userType = save.userType;
    this.channels = save.channels;

  }

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
