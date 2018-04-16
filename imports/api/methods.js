import { Meteor } from 'meteor/meteor';
import Tabular from 'meteor/aldeed:tabular';
import { Tasks } from '/imports/api/tasks.js';
import { check } from 'meteor/check';


Meteor.methods({
    'setRoleOnUser'( options ) {
        Roles.setUserRoles( options.user, [ options.role ] );
    },

    // "createTabular" : function(collectionName, columns, selector) {
    //     new Tabular.Table({
    //         name: "random",
    //         collection: eval(collectionName),
    //         selector: function() {
    //           return selector;
    //         },
    //         columns: columns
    //     });
    // }
    "createTabular" : function(name, collectionName, columns, selector) {
        check(name, String);
        // check(columns, Match.Any);
        // check(selector, Match.Any);
        new Tabular.Table({
            name: name,
            collection: eval(collectionName),
            "lengthMenu": [[10, 25, 50, -1],[10, 25, 50, "All"]],
            responsive: true,
            autoWidth: true,
            selector: function() {
                return selector;
            },
            buttonContainer: '.col-sm-6:eq(0)',
            columns: columns
        });
    }
});
