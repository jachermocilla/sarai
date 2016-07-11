/**
 * Publish all Suitability Maps
 */
Meteor.publish('blog', function () {
  return Blog.find();
});