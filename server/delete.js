const person = require('./Person.js')

module.exports = function(app,fs){


  /* Deletes a user from the Person object.
   * Parameter: username: The user that I wish to delete from the Person object.
  */
  app.get('/server/delete', (req, res) => {
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    var deleteFile = '';
    var exists = false;
    fs.readdir('./server/users/', (err, files)=> {
      files.forEach(file=> {
            console.log(file.toString()  + uname)
        if (file.toString() == uname) {
          exists = true;
          deleteFile = file;

        }
      })
      if (exists) {
        res.send({'username':uname, 'success':true});
        fs.unlink('./server/users/'+deleteFile,(err) => {
          if(err){
            console.log(err);
          }
        });

      }
    })

  });

}
