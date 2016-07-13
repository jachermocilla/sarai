Template.WAISSExplore.onCreated(function() {
    Meteor.subscribe('farm');
    Meteor.subscribe('crop');
});