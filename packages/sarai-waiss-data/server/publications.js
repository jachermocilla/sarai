Meteor.publish('farm', function(userId) {
    return Farm.find({
        userId: userId
    });
});