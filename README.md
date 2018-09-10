<<<<<<< HEAD
# Angular-Labs
=======
# Assignment One

## Git Hub



## Data Structures

I've got two classes named Person and GroupClass that encapsulate all the data needed for
the functionality of the program.

Person attributes

id - doesnt currently have a use but is for future expansion
name - name of the user of the system
passw - password of the user of the system
groups [] - groups the user is member of
userType - whether the user is a regular user, super user or admin user
channels [] - channels the user a member of 

GroupClass attributes 

id - doesnt currently have a use but is for future expansion
name - name of the group
channel [] - name of the channel associated with a specified group
admins [] - name of the users who are admins of a specified group

    
## REST API

/server/addUserToChannel -   
Adds a channel to the Person object.
    Parameter: username: The user that I wish to add a channel to.
    Parameter: channelname: The channel that I wish to add to the user.


./server/users/
Adds a user to the Group object.
    Parameter: username: The user that I wish to add to a group.
    Parameter: group: The group that I wish to add the user to.
  
  
/server/createChannel
Creates a channel and adds to the Group object.
    Parameter: channelname: The channel that I wish to add to a group.
    Parameter: group: The group that I wish to add the channel to.
  
  
/server/delete
Deletes a user from the Person object.
    Parameter: username: The user that I wish to delete from the Person object.
  
  
/server/deleteGroup
Deletes a group file.
    Paramater: group: The group file that I wish delete.
  
  
/server/deleteUserFromChannel
Deletes a user from a channel in the Person object.
  Parameter: username: The user that I wish to delete from a group.
  Parameter: channelname: The channel that I wish deny access to the specified user.


/server/deleteUserFromGroup
Removes access to the Group of a specified user.
    Parameter: username: The user that I wish to deny access to the specified group.
    Parameter: group: The group that I wish deny access to the specified user.
  
  
/server/getGroupsAndChannels
Gets a list of groups and channels that a user has access to.
    Parameter: username: The user of the groups and channels that I wish to display.
  
  
/server/groupAdminOfGroup
Makes a specified user a group admin of a group.
    Parameter: username: The user I wish to make the group admin.
    Parameter: group: The specified group I wish the user to be the group admin of.

  
/server/makeSuper
Makes a specified user a super user.
  Parameter: username: The name of the user I wish to make a super user.


/server/register
Adds a user to the Person object.
    Parameter: username: The user that I wish to delete from the Person object.
    Parameter: password: The password that I wish to add to the Person object.
    Parameter: group: The group that I wish to add to the Person object.
  
  
/server/registerGroup
Adds a user to the Person object.
    Parameter: group: The group that I wish to add to the GroupClass object.





## Angular Architecture






>>>>>>> Weed 4
