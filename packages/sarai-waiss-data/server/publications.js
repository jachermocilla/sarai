Meteor.publish('farm', function() {
    return Farm.find();
});

Meteor.publish('crop', function() {
    return CropData.find();
});

Meteor.publish('water-management-tips', function() {
    return WaterManagementTips.find();
});