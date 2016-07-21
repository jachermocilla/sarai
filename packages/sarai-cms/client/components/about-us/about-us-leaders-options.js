Template.AboutUsProjectLeaderOptions.onRendered(() => {
  $("#cms-about-us-leaders-title-div").addClass("is-dirty");

  $("#cms-about-us-leaders-author1-div").addClass("is-dirty");
  $("#cms-about-us-leaders-subtext1-div").addClass("is-dirty");

  $("#cms-about-us-leaders-author2-div").addClass("is-dirty");
  $("#cms-about-us-leaders-subtext2-div").addClass("is-dirty");

  $("#cms-about-us-leaders-author3-div").addClass("is-dirty");
  $("#cms-about-us-leaders-subtext3-div").addClass("is-dirty");

  $("#cms-about-us-leaders-author4-div").addClass("is-dirty");
  $("#cms-about-us-leaders-subtext4-div").addClass("is-dirty");

  $("#cms-about-us-leaders-author5-div").addClass("is-dirty");
  $("#cms-about-us-leaders-subtext5-div").addClass("is-dirty");
})

Template.AboutUsProjectLeaderOptions.events({
  'click #cms-about-us-leaders-save': () => {
    const title = $("#cms-about-us-leaders-title").val()

    const author1 = $("#cms-about-us-leaders-author1").val()
    const subtext1 = $("#cms-about-us-leaders-subtext1").val()

    const author2 = $("#cms-about-us-leaders-author2").val()
    const subtext2 = $("#cms-about-us-leaders-subtext2").val()

    const author3 = $("#cms-about-us-leaders-author3").val()
    const subtext3 = $("#cms-about-us-leaders-subtext3").val()

    const author4 = $("#cms-about-us-leaders-author4").val()
    const subtext4 = $("#cms-about-us-leaders-subtext4").val()

    const author5 = $("#cms-about-us-leaders-author5").val()
    const subtext5 = $("#cms-about-us-leaders-subtext5").val()

    Meteor.call('cms-about-us-leaders-update', title, author1, subtext1, author2, subtext2, author3, subtext3, author4, subtext4, author5, subtext5, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Project Leaders'
      }

      showToast(toast)
    })
  }
})

Template.AboutUsProjectLeaderOptions.helpers({

  leaders: () => {
    const record = About.findOne({name: 'leaders'})
    if(record){
      return record;
    }
  },

  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const title = $("#cms-about-us-leaders-title").val()

    const author1 = $("#cms-about-us-leaders-author1").val()
    const subtext1 = $("#cms-about-us-leaders-subtext1").val()

    const author2 = $("#cms-about-us-leaders-author2").val()
    const subtext2 = $("#cms-about-us-leaders-subtext2").val()

    const author3 = $("#cms-about-us-leaders-author3").val()
    const subtext3 = $("#cms-about-us-leaders-subtext3").val()

    const author4 = $("#cms-about-us-leaders-author4").val()
    const subtext4 = $("#cms-about-us-leaders-subtext4").val()

    const author5 = $("#cms-about-us-leaders-author5").val()
    const subtext5 = $("#cms-about-us-leaders-subtext5").val()

    Meteor.call('cms-about-us-leaders-update', title, author1, subtext1, author2, subtext2, author3, subtext3, author4, subtext4, author5, subtext5)
  }
})