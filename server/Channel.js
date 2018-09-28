module.exports = class Channel {

  /* Constructor for the GroupClass class.
   * Parameter: id: The id (not compulsory) of the user I wish to make group admin of a specified group.
   * Parameter: name: The name of the user I wish to make group admin of a specified group.
   * Parameter: channel: The name of a channel that belongs to a specified group.
  */
  constructor(id, name) {
    if (id === null) {
      return;
    }
    this.name = name;
    this.history = [];
    this.history.push("create a new channel");

  }





  saveToDB(db){

    db.collection("Channels").findOneAndUpdate({name: this.name},{$set: {name: this.name, history : this.history}},{upsert: true},function(err, result){
      if (err) {
        console.log(err)
      }
      //console.log(result);
    })
  }

  setValues(result){
    //console.log(result);
    this.name = result.name;
    this.history = result.history;
  }

  loadFromDB(name, db) {
    let set = this.setValues.bind(this);
    db.collection("Channels").findOne({name: name}, function(err, result){
        if (err) {
          console.log(err)
        }
        //console.log(result.name);
        if (result != null) {
          //this.name = result.name;
          set(result);
        }
      });

  }









}
