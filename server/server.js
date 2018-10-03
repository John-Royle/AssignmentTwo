const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'../dist/my-app2/')));

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url, {poolSize:10, useNewUrlParser: true },function(err, client) {
  if(err) {return console.log("This is the error")}
  console.log("database running");
  const dbName = 'mydb';
  const db = client.db(dbName);

  db.collections(function(err, names){
    if (names.length > 0 ) {
      db.createCollection("Users");
      db.createCollection("Groups");
      db.createCollection("Channels");
    }

    let Users = false;
    let Groups = false;
    let Channels = false;
    for (let i = 0; i < names.length; i++){
      if (names[i].name === "Users") {
        Users = true
      }
      if (names[i].name === "Groups") {
        Groups = true
      }
      if (names[i].name === "Channels") {
        Channels = true
      }
    }

    if (!Users){
      db.createCollection("Users");
    }
    if (!Groups){
      db.createCollection("Groups");
    }
    if (!Channels){
      db.createCollection("Channels");
    }

    //console.log(names);

  })


require('./routes.js')(app, path, db);
require('./auth.js')(app, fs, db);
require('./roomAuth.js')(app, fs, io, db);
require('./auth.js')(app, fs, db);
require('./register.js')(app, fs, db);
require('./registerGroup.js')(app, fs, db);
require('./deleteGroup.js')(app, fs, db);
require('./delete.js')(app, fs, db);
require('./makeSuper.js')(app, fs, db);
require('./addUserToGroup.js')(app, fs, db);
require('./login.js')(app, fs, db);
require('./getGroupsAndChannels.js')(app, fs, db);
require('./groupAdminOfGroup.js')(app, fs, db);
require('./deleteUserFromChannel.js')(app, fs, db);
require('./createChannel.js')(app, fs, db);
require('./addUserToChannel.js')(app, fs, db);
require('./deleteUserFromGroup.js')(app, fs, db);
require('./socket.js')(app, io, fs, db);
require('./listen.js')(http);

let tempFunction = () => {
  console.log("Made Super User again");
}

const person = require('./Person.js');
let y = new person(0, "super", "super", "all")
y.userType = 2;
y.saveToDB(db, null, tempFunction, person)
/*let x = new person(null);
x.loadFromDB("super",db);

const groupClass = require('./GroupClass.js');
let z = new groupClass(0, "all","testChannel")
z.saveToDB(db)
let i = new groupClass(null);
i.loadFromDB("all",db);

const channel = require('./Channel.js');
let a = new channel(0, "testChannel")
a.saveToDB(db)
let b = new channel(null);
b.loadFromDB("testChannel",db);*/



});
