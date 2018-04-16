import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { Meteor } from 'meteor/meteor';

import './task.js';
import './body.html';
// import './dynTab.js';
import './dynamicTabular.js';


// import './methods.js'
// import '../api/methods.js';  //not sure if this is necessary, works without it...


// import '../api/tables.js';
import '../../tables.js';


Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1 } });
    },
    // uniqueselector() {
    //     return {name: "New task"}
    // }
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault();

        const target = event.target;
        const name = target.name.value;

        Tasks.insert({
            name,
            createdAt: new Date(),
            roles: "remove",
        });

        target.name.value = '';
    },
    'change [name="taskRole"]'(evt) {
        var _taskid;
        _taskid = evt.target.id.substring(5);
        var task = Tasks.findOne(_taskid)
        var selectValue = evt.target.value;
        console.log("second: " + selectValue + " " + task._id);
        Tasks.update(task._id, { $set: { roles: selectValue } });
    },
    'change [name="userRole"]'(evt) {
        var _userid;
        _userid = evt.target.id.substring(5);
        var user = Meteor.users.findOne(_userid)
        var selectValue = evt.target.value;
        // console.log("About users: " + selectValue + " --> " + Object.keys(user));
        // console.log(user)
        // Roles.addUsersToRoles( user._id, 'manager' );
        Meteor.call( "setRoleOnUser", {
            user: user._id,
            role: selectValue
        })
    }
})












// 'change [name="userRole"]'(evt) {
//     // var parentID = $(this).closest('select').attr('id');
//     var _userid;
//     _userid = evt.target.id.substring(5);
//     var user = Tasks.findOne(_userid)
//     // Meteor.users.remove(user._id)
//     var selectValue = evt.target.value;
//     // console.log("second: " + selectValue + " " + this._id + Object.keys(this));
//     console.log("second: " + selectValue + " " + user._id);
//     Tasks.update(this._id, { $set: { roles: 'creator' } });
//     // Tasks.update(this._id, { $set: { roles: selectValue } });
// }


// 'change [name="userRole"]'(evt) {
//     var _taskid;
//     _taskid = evt.target.id.substring(5);
//     var task = Tasks.findOne(_taskid)
//     var selectValue = evt.target.value;
//     console.log("second: " + selectValue + " " + task._id);
//     Tasks.update(this._id, { $set: { roles: 'creator' } });
// }