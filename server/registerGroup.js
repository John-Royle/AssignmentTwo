const groupClass = require('./GroupClass.js');
var id = 1;

module.exports = function(app,fs, db){

  /* Adds a user to the Person object.
   * Parameter: group: The group that I wish to add to the GroupClass object.
  */
  app.get('/server/registerGroup', (req, res) => {

    var group = req.query.group;

    var exists = false;

    let Group = new groupClass(0, group, "Test")

    let tempFunction = (res, group, result) => {
      console.log(result);
      if (result != null) {
        res.send({'group':group,'success':false});
      } else {

        res.send({'group':group, 'success':true});
      }
    }
    Group.saveToDB(db, res, tempFunction, Group);

  });


}
