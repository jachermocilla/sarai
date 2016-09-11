Template.ServicesCMS.onCreated(() => {
  Meteor.subscribe('services')
})

Template.ServicesCMS.onRendered(() => {
})

Template.ServicesCMS.events({

  'click .cms-service-edit': () => {

  },

  'click #cms-service-add': () => {
    console.log('Add new service')
  }
})

Template.ServicesCMS.helpers({
  services: () => {
    const records = Services.find({}).fetch()

    if (records) {
      return records
    }
  },

  showToastIfAny: () => {
    if (Session.get('toast') != undefined) {
      console.log(Session.get('toast'))

      Session.set('toast', undefined)
    }
  }
})