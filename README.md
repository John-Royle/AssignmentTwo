<<<<<<< HEAD
# Angular-Labs
=======
# Assignment Two

## Git Hub

I simply added all my files, commit them with a relevent message and then pushed it 
straight to the master branch due to time constraints.

Had I had more time I would have created a new branch for each new piece of functionality
and merged that branch with the master branch.

Create new branch:
git branch nameOfTestBranch

Use the new branch:
git checkout nameOfBranch

Then merged the test branch with the master branch:
git checkout master
git merge nameOfBranch

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

Channelhistory
Component - Displays a page that shows nothing at this point as it is not required to show 
actual channels.

Services - None used at this point of program (User Authentication etc).

controlpanel
Component - Provides a list of options for the users, most of which can only be seen if 
the user is a super user or admin user. Provides a link between the server and the
web interface by way of forms and related functions.

Services - None used at this point of program (User Authentication etc).


login
Component - Provides options for a user to login. Provides a link between the server and 
the web interface by way of a form and related functions.

Services - None used at this point of program (User Authentication etc).

logout
Component - Deletes user information and redirects to the login page.

Services - None used at this point of program (User Authentication etc).

menu
Component - Provides a list of links to the other component pages.

Services - None used at this point of program (User Authentication etc).

notfound
Component - Just a simple 404 page.

Services - None used at this point of program (User Authentication etc).

selectroom
Component - Provides a list of groups and associated channels for a specified user.

Services - None used at this point of program (User Authentication etc).




>>>>>>> Weed 4
