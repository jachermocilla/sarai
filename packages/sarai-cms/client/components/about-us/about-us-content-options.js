Template.AboutUsContentOptions.onRendered(() => {
  $("#cms-about-us-content-title-div").addClass("is-dirty");
  $("#cms-about-us-content-text-div").addClass("is-dirty");
})

Template.AboutUsContentOptions.events({
  'click #cms-about-us-content-save': () => {
    const title = $("#cms-about-us-content-title").val()
    const description = $("#cms-about-us-content-text").val()

    Meteor.call('cms-about-us-content-update', title, description, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Content'
      }

      showToast(toast)
    })
  }
})

Template.AboutUsContentOptions.helpers({

  title: () => {
    const record = About.findOne({name: 'origin'})
    return record && record.title;
  },

  description: () => {
    const record = About.findOne({name: 'origin'})
    return record && record.description
  },
  
  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const title = $("#cms-about-us-content-title").val()
    const description = $("#cms-about-us-content-text").val()

    Meteor.call('cms-about-us-content-update', title, description)
  }
})