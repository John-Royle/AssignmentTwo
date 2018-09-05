const user = 0;
const groupUser = 1;
const superUser = 2;

module.exports = class Person {


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

    console.log(this);

  }

  loadFromFile(save) {
    this.id = save.id;
    this.name = save.name;
    this.passw = save.passw;
    this.groups = save.groups;
    this.userType = save.userType;
    this.channels = save.channels;

    console.log(this);
  }

  addChannel(channel) {
    for (let i = 0; i < this.channels.length; i ++) {
      if (this.channels[i] === channel) {
        console.log("got here");
        return false;
      }
    }
    this.channels.push(channel);
    return true;
  }

  addToGroup(group) {
    for (let i = 0; i < this.groups.length; i ++) {
      if (this.groups[i] === group) {
        console.log("got here");
        return false;
      }
    }
    this.groups.push(group);
    return true;
  }

  deleteFromGroup(group) {
    for (let i = 0; i < this.groups.length; i ++) {
      if (this.groups[i] === group) {
        this.groups.splice(this.groups.indexOf(group), 1);
        return true;
      }
    }

    return false;
  }

  changeUserType(newType) {
    this.userType = newType;
    console.log(this);
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
