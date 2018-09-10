const groupClass = require('./GroupClass.js');
var id = 1;

module.exports = function(app,fs){

  /* Adds a user to the Person object.
   * Parameter: group: The group that I wish to add to the GroupClass object.
  */
  app.get('/server/registerGroup', (req, res) => {
    var isUser =0;
    var userObj;

    var group = req.query.group;

    var exists = false;
    fs.readdir('./server/groups/', (err, files)=> {
      files.forEach(file=> {
            console.log(file.toString()  + group)
        if (file.toString() == group) {
          exists = true;
        }
      })
      if (exists) {
        res.send({'group':group,'success':false});
      } else {
        let hello = new groupClass(id, group, null);
        id += 1;
        hello.save(fs);
        res.send({'group':group, 'success':true});
      }
    })

  });

}
