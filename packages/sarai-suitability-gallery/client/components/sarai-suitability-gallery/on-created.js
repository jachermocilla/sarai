Template.SaraiSuitabilityGallery.onCreated(function() {
  Meteor.subscribe('suitability-gallery')
  Meteor.subscribe('regions')
  Meteor.subscribe('provinces')

  Session.set('region', 'All')
  Session.set('province', 'All')
  Session.set('crop', 'All')
})