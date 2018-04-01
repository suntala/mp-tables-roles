import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
// import { Tasks } from './tasks.js'
import { Tasks } from '/imports/api/tasks.js';


new Tabular.Table({
    name: "Tasks",
    collection: Tasks,
    columns: [
        {data: "name", title: "Name"},
        {data: "createdAt", title: "Date"},
        {data: "roles", title: "Role"},
        {
            data: "_id", 
            title: "Role Selector",
            render: function(val, type, doc) {
              if (val) {
                return `<select name="taskRole" id=edit-`+ val +`>
                <option value="admin" id=admi-`+ val +`>Admin</option>
                <option value="manager" id=mana-`+ val +`>Manager</option>
                <option value="brand" id=bran-`+ val +`>Brand</option>
                <option value="creator" id=crea-`+ val +`>Creator</option>
                <option value="software" id=soft-`+ val +`>Software</option>
                <option value="remove" id=remo-`+ val +`>None</option>
              </select>`  //should remove the if I think
              }
            }
          },
    ]
});

new Tabular.Table({
    name: "Users",
    collection: Meteor.users,
    columns: [
      {data: "_id", title: "ID"},
      {data: "username", title: "Username"},
      {data: "roles", title: "Roles"},
      {
        data: "_id", 
        title: "Role Selector",
        render: function(val, type, doc) {
          if (val) {
            return `<select name="userRole" id=edit-`+ val +`>
            <option value="admin" id=admi-`+ val +`>Admin</option>
            <option value="manager" id=mana-`+ val +`>Manager</option>
            <option value="brand" id=bran-`+ val +`>Brand</option>
            <option value="creator" id=crea-`+ val +`>Creator</option>
            <option value="software" id=soft-`+ val +`>Software</option>
            <option value="remove" id=remo-`+ val +`>None</option>
          </select>`  //should remove the if I think
          }
        }
      },
    ]
});
