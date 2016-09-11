Template.ServicesCMSDeleteButton.events({
  'click .cms-service-delete': (event, template) => {

    Meteor.call('cms-service-delete', template.data.id, (error, results) => {

      if (!error) {
        showToast('Successfully deleted service')
      } else {
        showToast('Unable to delete service')
      }
    })
  }
})