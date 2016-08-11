Template.ServicesCMSForm.onCreated(() => {
  Meteor.subscribe('services')
  this.serviceID = FlowRouter.current().params._id
})

Template.ServicesCMSForm.onRendered(() => {
  setFormDirty()
<<<<<<< 5b67397441bb7a3fa07840725b4558e44fa11c98
=======

<<<<<<< 779b3a7a532f9d989bb40a6307b6c8801ca81008
<<<<<<< eb1e10f14362061ae257a69b6ba3e990be56d141
=======
>>>>>>> Initial layout for services form
  $('#cms-service-col1text-editor').summernote();
  $('#cms-service-col2text-editor').summernote();

  //This is such a hack
  const hiddenCode = $('#hidden-col1text').attr('value')
  $('#cms-service-col1Text-editor').code(hiddenCode)
<<<<<<< 779b3a7a532f9d989bb40a6307b6c8801ca81008
=======
  $(document).ready(function() {
    $('#summernote').summernote();
  });
>>>>>>> Added summernote
=======
>>>>>>> Initial layout for services form
>>>>>>> Initial layout for services form
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
}


//SERVICES CMS EDIT FORM