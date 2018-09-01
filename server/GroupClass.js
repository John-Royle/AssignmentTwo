module.exports = class GroupClass {


  constructor(id, name, channel) {

    this.id = id;
    this.name = name;
    this.channel = [];
    this.channel.push(channel);

    console.log(this);

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
