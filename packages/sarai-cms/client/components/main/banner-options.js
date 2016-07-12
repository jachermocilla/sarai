Template.BannerOptions.created = function() {
}

Template.BannerOptions.onRendered(() => {
  $("#cms-banner-title-div").addClass("is-dirty");
  $("#cms-banner-align-div").addClass("is-dirty");
  $("#cms-banner-subtext-div").addClass("is-dirty");
  $("#cms-banner-text-div").addClass("is-dirty");
  $("#cms-banner-button-text-div").addClass("is-dirty");
})

Template.BannerOptions.events({
  'click #cms-banner-save': () => {
    const title = $("#cms-banner-title").val()
    const align = $("#cms-banner-align").val()
    const text = $("#cms-banner-text").val()
    const subtext = $("#cms-banner-subtext").val()
    const buttonText = $("#cms-banner-button-text").val()


    Meteor.call('cms-banner-update', align, title, text, subtext, buttonText, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to Banner'
      }

      (function() {
        'use strict';
        window['counter'] = 0;
        var snackbarContainer = document.querySelector('#cms-toast');
        snackbarContainer.MaterialSnackbar.showSnackbar({message: toast});
      }());
    })
  }
});

Template.BannerOptions.helpers({
  title: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.banners[0].title
  },

  align: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.banners[0].align
  },

  text: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.banners[0].text
  },

  subtext: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.banners[0].subtext
  },

  buttonText: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.banners[0].buttonText
  },

  myCallbacks: () => {
    return {
      formData: () => {
        return {
          filename: 'banner-img',
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        Meteor.call('cms-banner-img-update', `${fileInfo.name}`, (error, result) => {
          let toast = 'File uploaded successfully'
          if (error) {
            toast = 'Unable to upload file'
          }
          (function() {
            'use strict';
            window['counter'] = 0;
            var snackbarContainer = document.querySelector('#cms-toast');
            snackbarContainer.MaterialSnackbar.showSnackbar({message: toast});
          }());
        })
      }
    }
  }
})