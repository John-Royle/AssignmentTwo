const user = 0;
const groupUser = 1;
const superUser = 2;

module.exports = class Person {


  constructor(id, name, passw, group) {

    this.id = id;
    this.name = name;
    this.passw = passw;
    this.groups = [];
    this.groups.push(group);
    this.userType = user;

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
