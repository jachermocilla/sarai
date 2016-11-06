Template.MainLayout.onCreated(() => {
  Meteor.subscribe('main');
})

Template.MainLayout.helpers({
  topHeaderEnabled: () => {
    const record = Main.findOne({'name': 'topHeader'})

    return record && record.enabled
  }
})