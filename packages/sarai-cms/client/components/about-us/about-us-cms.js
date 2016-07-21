Template.AboutUsCMS.helpers({
  message: function() {
    return 'sample'
  }
})

Template.AboutUsCMS.onCreated(function() {
  Meteor.subscribe('about-us');

})