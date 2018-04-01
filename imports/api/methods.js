import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'setRoleOnUser'( options ) {
        Roles.setUserRoles( options.user, [ options.role ] );
    }
});
