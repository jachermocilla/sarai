Meteor.publish('farm', function(userId) {
    return Farm.find({
        userId: userId
    });
});

Meteor.publish('crop', function() {
    return CropData.find();
});