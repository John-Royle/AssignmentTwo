const groupClass = require('./GroupClass.js')

module.exports = function(app,fs){

  /* Deletes a group file.
   * Paramater: group: The group file that I wish delete.
  */
  app.get('/server/deleteGroup', (req, res) => {
    var isUser =0;
    var userObj;

    var group = req.query.group;
    var deleteFile = '';

    var exists = false;
    fs.readdir('./server/groups/', (err, files)=> {
      files.forEach(file=> {
            console.log(file.toString()  + group)
        if (file.toString() == group) {
          exists = true;
          deleteFile = file;

        }
      })
      if (exists) {
        res.send({'group':group, 'success':true});
        fs.unlink('./server/groups/'+deleteFile,(err) => {
          if(err){
            console.log(err);
          }
        });

      }
    })

  });

}
