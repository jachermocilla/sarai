Template.CMSDashboard.helpers({
  text: () => {
    return Main.findOne({name: 'topHeader'}).message
  }
})