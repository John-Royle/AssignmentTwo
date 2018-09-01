const person = require('./Person.js')

module.exports = function(app,fs){

  app.get('/server/delete', (req, res) => {
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    var deleteFile = '';

    console.log("This"+uname);
    //
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
        //res.send({'username':uname,'success':false});
        res.send({'username':uname, 'success':true});
        console.log(deleteFile);
        fs.unlink('./server/users/'+deleteFile,(err) => {
          if(err){
            console.log(err);
          }
        });

      }
    })

  });

}
