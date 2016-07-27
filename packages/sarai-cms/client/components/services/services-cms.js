Template.ServicesCMS.onCreated(() => {
  Meteor.subscribe('services')
})

Template.ServicesCMS.helpers({
  services: () => {
    const records = Services.find({}).fetch()

    if (records) {
      return records
    }
  }
})