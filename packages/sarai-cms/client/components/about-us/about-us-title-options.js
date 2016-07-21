Template.AboutUsTitleOptions.onRendered(() => {
  $("#cms-about-us-title-div").addClass("is-dirty");
})

Template.AboutUsTitleOptions.events({
  'click #cms-about-us-title-save': () => {
    const text = $("#cms-about-us-title").val()

    Meteor.call('cms-about-us-title-update', text, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Title'
      }

      showToast(toast)
    })
  }
})

Template.AboutUsTitleOptions.helpers({

  title: () => {
    const record = About.findOne({name: 'title'})
    if(record){
      return record.text;
    }
  },
  
  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const title = $("#cms-about-us-title").val()

    Meteor.call('cms-about-us-title-update', text)
  }
})