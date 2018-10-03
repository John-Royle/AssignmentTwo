const person = require('./Person.js');
const {StringDecoder} = require('string_decoder');

/* Makes a specified user a super user.
 * Parameter: username: The name of the user I wish to make a super user.
*/
module.exports = function(app,fs, db){

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


  };
