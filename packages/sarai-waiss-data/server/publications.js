Meteor.publish('farm', function() {
    return Farm.find();
});

Meteor.publish('crop', function() {
    return CropData.find();
});