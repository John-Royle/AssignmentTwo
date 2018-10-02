const person = require('./Person.js');
const groupClass = require('./GroupClass.js');

const functionOne = function (res, tempPerson, result, db){

  if (result == null) {
    res.send({'username':"Not Found", 'success':false});
  } else {
    //console.log("Got to Function One");
  let group = new groupClass(null);
  group.personTemp = tempPerson;
  group.loadFromDB(tempPerson.groupTemp, db, group, functionTwo, res)
  //console.log(group);
  //console.log(group.personTemp);
  }
}


function functionTwo(res, group, result, db){
  if (result == null) {
    res.send({'group':"Not Found", 'success':false});
  } else {

  group.personTemp.addToGroup(group.name);
  group.personTemp.saveToDB(db, res, functionThree, group.personTemp);
  }
}


function functionThree(res, tempPerson, result, db){
  console.log("Got to Function Three");
  if (result != null) {
    res.send({'Username':"Not Saved", 'success':false});
  } else {
    res.send({'Username':tempPerson.name, 'success':true});
  }
}


module.exports = function(app,fs, db){

  /* Adds a user to the Group object.
   * Parameter: username: The user that I wish to add to a group.
   * Parameter: group: The group that I wish to add the user to.
  */

  app.get('/server/addUserToGroup', (req, res) => {
    console.log("Got to Add User");
    var uname = req.query.username
    var group = req.query.group;


    let Person = new person(null);
    Person.groupTemp = group;

    Person.loadFromDB(uname, db, res, functionOne, Person)

  });
    //let tempPerson = new person(null)
    //let tempFunction = (res, person, result,db) => {
      //tempPerson.loadFromDB(uname, db, res, callback, tempPerson)
      //tempPerson.loadFromDB(uname, db, tempPerson)
      //console.log(tempPerson)
      // res.send({'username':uname, 'success':true});
/*
      console.log(tempPerson);
      if (tempPerson.name == null) {
        res.send({'username':uname, 'success':false});
      } else {
        res.send({'username':uname, 'success':true});
      }
      */
    //}


/*
    if (tempPerson.name == null) {
      res.send({'username':uname, 'success':false});
    } else {
      if (tempPerson.addChannel(channel)) {
        tempPerson.saveToDB(db);
      }
      res.send({'username':uname, 'success':true});
    }
    */

    //Person.saveToDB(db, res, tempFunction, Group);



  };
