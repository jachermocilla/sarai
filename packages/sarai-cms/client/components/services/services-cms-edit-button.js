Template.ServicesCMSEditButton.onRendered(() => {

})

<<<<<<< cfa99f480272cde31853b973137639f76c3fa8f2
=======
Template.ServicesCMSEditButton.events({
  'click #cms-service-edit-button': () => {

  },

  'click .cms-service-edit': (event, template) => {
    console.log('Clicked edit button')
    console.log(template.data.id)

}})

>>>>>>> Worked on services
Template.ServicesCMSEditButton.helpers({
  edit: () => {

  }
})