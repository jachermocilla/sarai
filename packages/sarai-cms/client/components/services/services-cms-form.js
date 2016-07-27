Template.ServicesCMSForm.onCreated(() => {
  Meteor.subscribe('services')
  this.serviceID = FlowRouter.current().params._id
})

Template.ServicesCMSForm.onRendered(() => {
  setFormDirty()

  $(document).ready(function() {
    $('#summernote').summernote();
  });
})

Template.ServicesCMSForm.events({
  'click #cms-service-save-button': () => {

  }
})

Template.ServicesCMSForm.helpers({
  save: () => {

  },

  service: () => {
    const service = Services.findOne({_id: this.serviceID})

    return service && service
  }
})

const setFormDirty = () => {

  $('#cms-service-title').addClass('is-dirty')
}


//SERVICES CMS EDIT FORM