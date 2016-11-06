/**
 * Publish all Suitability Maps
 */
Meteor.publish('apps', function () {
  return Apps.find();
});