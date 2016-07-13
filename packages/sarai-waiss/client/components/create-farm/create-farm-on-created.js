Template.WAISSCreateFarm.onCreated(function() {
    Meteor.subscribe('farm', Meteor.userId());
    Meteor.subscribe('crop');
    Meteor.subscribe('weather-stations');
    Meteor.subscribe('weather-data');
});