Template.WAISSLayout.helpers({
    isLoggedIn: function() {
        return !!Meteor.userId();
    }
});