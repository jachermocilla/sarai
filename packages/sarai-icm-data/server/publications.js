
Meteor.publish('icm', function () {
  return ICM.find();
});