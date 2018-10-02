const groupClass = require('./GroupClass.js')

function functionOne(res, group, result, db){
  if (result == null) {
    res.send({'Group':"Not Found", 'success':false});
  } else {
    console.log("Hi prior to delete")
    group.deleteFromDB(db, res, functionTwo, group);
  }
}

function functionTwo(res, group, err, db){
  console.log("Got to Function Three");
  if (err == null) {
    res.send({'Group':"Not Deleted", 'success':false});
  } else {
    res.send({'Group':"Deleted", 'success':true});
  }
}

module.exports = function(app,fs, db){

  /* Deletes a group file.
   * Paramater: group: The group file that I wish delete.
  */
  app.get('/server/deleteGroup', (req, res) => {


    var groupName = req.query.group;
    let group= new groupClass(null);
    group.loadFromDB(groupName, db, group, functionOne,res);

  });

}
