Template.SaraiSuitabilityGallery.onCreated(function() {
  Meteor.subscribe('suitability-gallery');
  Meteor.subscribe('regions')
  Meteor.subscribe('provinces')

  //default is Region IV-A: CALABARZON, Laguna and Los Baños
  Session.set('region', 'All')
  Session.set('province', 'All')
})