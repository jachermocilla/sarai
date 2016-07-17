Template.BannerOptions.created = function() {
  this.uploadedFile = ''
}

Template.BannerOptions.onRendered(() => {
  // $("#cms-banner-title-div").addClass("is-dirty");
  // $("#cms-banner-align-div").addClass("is-dirty");
  // $("#cms-banner-subtext-div").addClass("is-dirty");
  // $("#cms-banner-text-div").addClass("is-dirty");
  // $("#cms-banner-button-text-div").addClass("is-dirty");

  const dialog = document.querySelector('#cms-banner-dialog')

    dialog.querySelector('.cancel').addEventListener('click', () => {
      dialog.close();
    });

    dialog.querySelector('.save').addEventListener('click', () => {
      const action = this.action

      const temp = this.uploadedFile.split('/')
      const filename = temp[temp.length - 1]

      const _id = filename.substring(filename.indexOf('-') + 1, filename.indexOf('.'))

      const image = this.uploadedFile
      const textPosition = $('#cms-banner-slide-text-position-input').val()
      const title = $('#cms-banner-slide-title-input').val()
      const subTitle = $('#cms-banner-slide-subtitle-input').val()
      const text = $('#cms-banner-slide-text-input').val()
      const buttonText = $('#cms-banner-slide-button-text-input').val()
      const buttonHref = $('#cms-banner-slide-button-href-input').val()
      const rank = $('#cms-banner-slide-rank-input').val()

      if (action == 'add') {
        Meteor.call('cms-banner-slide-add', _id, image, textPosition, title, subTitle, text, buttonText, buttonHref, rank, (error, result) => {

        })
      }

      else if (action == 'edit') {
        console.log('saving edit')
      }

      dialog.close();
    })
})

Template.BannerOptions.events({
  'click #cms-banner-slide-add': () => {
    this.action = 'add'

    const dialog = document.querySelector('#cms-banner-dialog');
    dialog.showModal();

    $('#cms-banner-slide-text-position-input').val("")
    $('#cms-banner-slide-title-input').val("")
    $('#cms-banner-slide-subtitle-input').val("")
    $('#cms-banner-slide-text-input').val("")
    $('#cms-banner-slide-button-text-input').val("")
    $('#cms-banner-slide-button-href-input').val("")
    $('#cms-banner-slide-rank-input').val("")


  }
});

Template.BannerOptions.helpers({
  truncateTableEntry: (text) => {

    if (text.length > 20) {
      return `${text.substring(0, 20)}...`
    } else {
      return text
    }
  },

  dialogHeader: () => {
    const action = Session.get('action')

    if (action == 'add') {
      return 'Add Slide'
    } else if (action == 'edit') {
      return 'Edit Slide'
    }
  },

  slides: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.slides
  },

  myCallbacks: () => {
    return {
      formData: () => {
        return {
          filename: `slider-${Random.id()}`,
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        this.uploadedFile = `${uploadDirPrefix()}${fileInfo.path}`
      }
    }
  }
})