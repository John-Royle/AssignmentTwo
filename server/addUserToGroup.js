const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');

/*functionOne(){
  //user loaded
  Person.loadFromDB();
  //load griup
  loadFromDB()
  //return if user dfoesnt exist
}


functionTwo(){
  //goup loaded
  //check if group exists then add usert to group and save
  //return if group doesnt exist
}
functionThree(){
  //saved to db
  //return ifsuccessful
}*/



module.exports = function(app,fs, db){

  /* Adds a user to the Group object.
   * Parameter: username: The user that I wish to add to a group.
   * Parameter: group: The group that I wish to add the user to.
  */

  app.get('/server/addUserToGroup', (req, res) => {
  /*  const decoder = new StringDecoder('utf8');

    var uname = req.query.username
    var group = req.query.group;

    let Person = new person(0, uname, passw, group)

    let tempFunction = (res, person, result, db, group) => {

      //2

      let tempFunction2 = (res, person, result) => {
        if (result != null) {
          res.send({'group':group,'success':false});
        } else {

          res.send({'group':group, 'success':true});
        }

        group.loadFromDB(uname, db, res, callback, tempPerson);
    }

      //3
      let tempFunction3 = (res, person, result) => {
      person.saveToDB(db, res, tempFunction2, person);

    }

    //1
    Person.loadFromDB();
    let tempFunction1 = (res, person, result) => {
      if (result != null) {
        res.send({'username':uname,'success':false});
      } else {

        res.send({'username':uname, 'success':true});
      }
    }*/

      });

/*
app.get('/server/makeSuper', (req, res) => {

  var uname = req.query.username;


  let tempFunction = (res, person, result, db) => {
    person.changeUserType(2);
    console.log(db);

    let tempFunction2 = (res, person, result) => {
      if (result != null) {
        res.send({'username':uname,'success':false});
      } else {

        res.send({'username':uname, 'success':true});
      }
    }

    person.saveToDB(db, res, tempFunction2, person);

  }

  let tempPerson = new person(null)
  tempPerson.loadFromDB(uname, db, res, tempFunction, tempPerson)

    });
    */

  };
