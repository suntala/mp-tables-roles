/*import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import Tabular from 'meteor/aldeed:tabular';


import './dynTab.html';

Template.dynTab.helpers({
    getTabular: function() {
        // return Tabular.tablesByName["dynTab"];
        return Tabular.tablesByName["random"];
    },
    createTable: function() {
        // var tabularName = "random"
        // new Tabular.Table({
        //     name: tabularName,
        //     collection: Tasks,
        //     columns: order
        // })
        var columns = this.columns;
        var selector = this.selector;
        var collectionName = this.collectionName;
        // console.log(columns[0].id)
        var tabularName = "random";
        var order = ['columnName', 'columnDate'];
        // console.log(columns, order)
        Meteor.call("createTabular", collectionName, columns, selector, function(err, results) {
            if (!err) {
                new Tabular.Table({
                    name: tabularName,
                    collection: eval(collectionName),
                    // collection: Tasks,
                    selector: function() {
                        return selector;
                    },
                    // columns: columns
                    columns: [
                        {data: "name", title: "Name"},
                    ]
                });
            } else {
                console.log ('error', err)
            }
        })
    }
})




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