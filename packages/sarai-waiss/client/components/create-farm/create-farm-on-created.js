Template.WAISSCreateFarm.onCreated(function() {
    Meteor.subscribe('farm', Meteor.userId());
    Meteor.subscribe('crop');
});