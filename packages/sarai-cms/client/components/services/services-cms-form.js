Template.ServicesCMSForm.onCreated(() => {
  Meteor.subscribe('services')
  this.serviceID = FlowRouter.current().params._id
})

Template.ServicesCMSForm.onRendered(() => {
  setFormDirty()


  // $('#cms-service-col1text-editor').summernote();
  // $('#cms-service-col1text-editor').code('<h3>Sample</h3>');

  $('#cms-service-col2text-editor').summernote();


  // const hiddenCode = $('#hidden-col1text').attr('value')
  // $('#cms-service-col1Text-editor').code(hiddenCode)
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
  $('#cms-service-tagline').addClass('is-dirty')
  $('#cms-service-crops').addClass('is-dirty')
  $('#cms-service-experts').addClass('is-dirty')
  $('#cms-service-ura').addClass('is-dirty')
  $('#cms-service-leaders').addClass('is-dirty')

  $('#cms-service-col1title').addClass('is-dirty')
  $('#cms-service-col2title').addClass('is-dirty')
}
