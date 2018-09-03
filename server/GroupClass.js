module.exports = class GroupClass {


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

    console.log(this);

  }

  loadFromFile(save) {
    this.id = save.id;
    this.name = save.name;
    this.channel = save.channel;
    this.admins = save.admins;
    console.log(this);
  }

  addAdmin(admin) {
    for (let i = 0; i < this.admins.length; i ++) {
      if (this.admins[i] === admin) {
        console.log("got here");
        return false;
      }
    }
    this.admins.push(admin);
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
