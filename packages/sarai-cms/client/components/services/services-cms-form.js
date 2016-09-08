Template.ServicesCMSForm.onCreated(() => {
  Meteor.subscribe('services')
  this.serviceID = FlowRouter.current().params._id
})

Template.ServicesCMSForm.onRendered(() => {
  setFormDirty()
})

Template.ServicesCMSForm.events({

})

Template.ServicesCMSForm.helpers({
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

  $('#cms-service-subtitle').addClass('is-dirty')
  $('#cms-service-subtitleLink').addClass('is-dirty')

  $('#cms-service-col1title').addClass('is-dirty')
  $('#cms-service-col2title').addClass('is-dirty')
}

