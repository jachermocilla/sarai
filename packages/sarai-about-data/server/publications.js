Meteor.publish('about-us', function () {
  return About.find();
});