Template.ServicesCMS.onCreated(() => {
  Meteor.subscribe('services')
})

Template.ServicesCMS.onRendered(() => {
})

Template.ServicesCMS.events({

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
      showToast(Session.get('toast'))
      Session.set('toast', undefined)
    }
  }
})