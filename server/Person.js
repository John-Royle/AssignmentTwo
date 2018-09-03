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

    console.log(this);

  }

  loadFromFile(save) {
    this.id = save.id;
    this.name = save.name;
    this.passw = save.passw;
    this.groups = save.groups;
    this.userType = save.userType;

    console.log(this);
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
