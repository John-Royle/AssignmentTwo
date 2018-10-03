const person = require('./Person.js');
const groupClass = require('./GroupClass.js');
const {StringDecoder} = require('string_decoder');

function functionPersonLoaded(res, tempPerson, result, db) {
  if (result == null){
    res.send({'username':"Not Found", 'success':false});
  } else {
    if (tempPerson.groups.length == 0){
      res.send({'username':"No groups Found", 'success':false});
    } else {
      tempPerson.currentGroup = 0;
      let group = new groupClass(null);
      group.tempPerson = tempPerson;
      tempPerson.tempGroup = group;
      group.loadFromDB(tempPerson.groups[tempPerson.currentGroup], db, group, functionLoadGroup,res );
    }
  }

}

function functionLoadGroup(res, group, result, db) {
  group.tempPerson.currentGroup += 1;
  if (result != null){
    functionRecursion(group.tempPerson,group)
  }

  if (group.tempPerson.currentGroup === group.tempPerson.groups.length) {
      res.send({'username':"All possible channels", 'success':group.tempPerson.toReturn});
  } else {
    group.loadFromDB(group.tempPerson.groups[group.tempPerson.currentGroup], db, group, functionLoadGroup,res );
  }
}

function functionRecursion(person, group) {
  person.toReturn.groups.push(person.checkAllowedChannels(group));
}

module.exports = function(app,fs, db){

  /* Gets a list of groups and channels that a user has access to.
   * Parameter: username: The user of the groups and channels that I wish to display.
  */

  app.get('/server/getGroupsAndChannels', (req, res) => {
    const decoder = new StringDecoder('utf8');
    var isUser =0;
    var userObj;

    var uname = req.query.username;
    let toReturn = {"groups":[]};
    let tempPerson = new person(null)
    tempPerson.toReturn = toReturn;
    tempPerson.loadFromDB(uname, db, res, functionPersonLoaded, tempPerson);



      });

  };
