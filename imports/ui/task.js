import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
    'click .delete'() {
        Tasks.remove(this._id);
    },
    'change [name="userRole1"]'() {
        var selectValue = event.target.value;
        console.log("first: " + selectValue + " " + this._id);
        // Tasks.update(this._id, { $set: { roles: 'creator' } });
        Tasks.update(this._id, { $set: { roles: selectValue } });
    }   //why did this work even without passing in an event?
});




/*


'change [name="userRole"]': function( evt, template ) {
    let role = $( event.target ).find( 'option:selected' ).val();

    var _userid;
    _userid = evt.target.id.substring(5);
    var userR = Meteor.users.findOne(_userid)

    if (role == 'remove') {
      Meteor.call( "removeRoles", this._id);
      // Meteor.users.update(userR._id, { $set: { roles: role } })
    } else {
      Meteor.call( "setRoleOnUser", {
        user: userR._id,
        // roles: role
        role: role
      }, ( error, response ) => {
        if ( error ) {
          console.log( error.reason, "warning" );
        }
      });


`<select {{disableIfAdmin _id}} name="userRole" class="form-control" id=edit-`+ val +`>
      <option selected="{{selected roles.[0] 'admin'}}" value="admin">Admin</option>
      <option selected="{{selected roles.[0] 'manager'}}" value="manager">Manager</option>
      <option selected="{{selected roles.[0] 'brand'}}" value="brand">Brand</option>
      <option selected="{{selected roles.[0] 'creator'}}" value="creator">Creator</option>
      <option selected="{{selected roles.[0] 'software'}}" value="software">Software</option>
      <option selected="{{selected roles.[0] undefined}}" value="remove">None</option>
</select>`

*/