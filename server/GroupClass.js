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

  loadFromFile(save) {
    this.id = save.id;
    this.name = save.name;
    this.channel = save.channel;
    this.admins = save.admins;
  }

  /* Adds a user to the Group Admin array.
   * Parameter: admin: The name of the user I wish to make group admin of a specified group.
  */

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
