Meteor.publish('suitability-galery', function () {
  return SuitabilityGallery.find();
});