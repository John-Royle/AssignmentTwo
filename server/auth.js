module.exports = function(app, fs) {

  app.get('/server/auth', (req, res) => {
    var uname = req.query.username;
    //var passw = req.query.password;
    var userObj;

    fs.readFile('server/users.json', 'utf8', function(err, data){
      if (err) {
        console.log(err);
        res.send({'username':'','success':false});
      } else {
        console.log("THIS RAN");
        userObj = JSON.parse(data);
        for (let i=0;i<userObj.length;i++) {
          if (userObj[i].name == uname) {
          //if (userObj[i].name == uname && userObj[i].passw == password) {
            res.send({'username':uname,'success':true});
            return;
          }

        }
        res.send({'username':uname,'success':false});
    }
});
});
}

// git test
