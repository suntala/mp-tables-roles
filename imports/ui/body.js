import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

// import '../api/tables.js';
import '../../tables.js';


Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1 } });
    },
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
    'change [name="userRole"]'(evt) {
        var _taskid;
        _taskid = evt.target.id.substring(5);
        var task = Tasks.findOne(_taskid)
        var selectValue = evt.target.value;
        console.log("second: " + selectValue + " " + task._id);
        Tasks.update(task._id, { $set: { roles: selectValue } });
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