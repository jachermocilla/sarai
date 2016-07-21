Template.WAISSMain.onCreated(function() {
    Meteor.subscribe('farm', Meteor.userId());
    Meteor.subscribe('crop');
    Meteor.subscribe('weather-stations');
    Meteor.subscribe('water-management-tips');
});

Template.WAISSMain.onRendered(function() {
    Session.set('farmId', Farm.findOne()._id);
});