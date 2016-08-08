Template.BannerOptions.created = function() {
  this.uploadedFile = ''
}

Template.BannerOptions.onRendered(() => {
  const dialog = document.querySelector('#cms-banner-dialog')

  dialog.querySelector('.cancel').addEventListener('click', () => {
    dialog.close();
  });

  dialog.querySelector('.save').addEventListener('click', () => {
    let action = this.action

    const image = this.uploadedFile
    const textPosition = $('#cms-banner-slide-text-position-input').val()
    const title = $('#cms-banner-slide-title-input').val()
    const subTitle = $('#cms-banner-slide-subtitle-input').val()
    const text = $('#cms-banner-slide-text-input').val()
    const buttonText = $('#cms-banner-slide-button-text-input').val()
    const buttonHref = $('#cms-banner-slide-button-href-input').val()
    const rank = $('#cms-banner-slide-rank-input').val()

    if (action == 'add') {
      Meteor.call('cms-banner-slide-add', image, textPosition, title, subTitle, text, buttonText, buttonHref, rank, (error, result) => {
        let toast = 'Slide saved'
        if (error) {
          toast = 'Unable to save slide'
        }
        showToast(toast)
      })
    }

    else if (action == 'edit') {
      const _id = this.actionID

      Meteor.call('cms-banner-slide-edit', _id, image, textPosition, title, subTitle, text, buttonText, buttonHref, rank, (error, result) => {
        let toast = 'Slide saved'
        if (error) {
          toasts = 'Unable to save slide'
        }
        showToast(toast)
      })

    }

    dialog.close();
  })
})

Template.BannerOptions.events({
  'click #cms-banner-slide-add': () => {
    this.action = 'add'

    const dialog = document.querySelector('#cms-banner-dialog');
    dialog.showModal();

    setBannerDialogContents('Add Slide', '', '', '', '', '', '', '', '')
  },

  'click .cms-banner-slider-edit': (e) => {
    const id = e.currentTarget.id.split('-')[2]

    console.log(`id of current target: ${id}`)

    this.action = 'edit'
    this.actionID = id

    const dialog = document.querySelector('#cms-banner-dialog');
    dialog.showModal();

    const record = Main.findOne({name: 'banner'})

    if (record) {

      const slide = record.slides.find((element) => {
        return element._id == id
      })

      this.uploadedFile = slide.image

      setBannerDialogContents('Edit Slide', slide.image, slide.textPosition, slide.title, slide.subTitle, slide.text, slide.buttonText, slide.buttonLink, slide.rank)
    }
  },

  'click .cms-banner-slider-delete': (e) => {
    const id = e.currentTarget.id.split('-')[2]

    Meteor.call('cms-banner-slide-delete', id, (error, result) => {
      let toast = 'Deleted slide'
      if (error) {
        toast = 'Unable to delete slide'
      }
      showToast(toast)
    })
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
    console.log(`This.action: ${this.action}`)
    if (this.action == 'add') {
      return 'Add Slide'
    } else if (this.action == 'edit') {
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
        // if (this.action == 'add') {
        return {
          filename: `slider-${Random.id()}`,
          uploadGroup: 'main'
        }
        // }

        // else if (this.action == 'edit') {
        //   return {
        //     filename: `slider-${this.actionID}`,
        //     uploadGroup: 'main'
        //   }
        // }

      },
      finished: (index, fileInfo, context) => {
        this.uploadedFile = `${uploadDirPrefix()}${fileInfo.path}`

        console.log(`saved to ${this.uploadedFile}`)
        $('#cms-banner-slide-img').attr('src', `${uploadDirPrefix()}${fileInfo.path}`)

      }
    }
  }
})


const setBannerDialogContents = (dialogTitle, image, textPosition, title, subTitle, text, buttonText, buttonLink, rank) => {
  $('#cms-banner-dialog-title').html(dialogTitle)

  $('#cms-banner-slide-img').attr('src', image)
  $('#cms-banner-slide-text-position-input').val(textPosition)
  $('#cms-banner-slide-title-input').val(title)
  $('#cms-banner-slide-subtitle-input').val(subTitle)
  $('#cms-banner-slide-text-input').val(text)
  $('#cms-banner-slide-button-text-input').val(buttonText)
  $('#cms-banner-slide-button-href-input').val(buttonLink)
  $('#cms-banner-slide-rank-input').val(rank)

  if (this.action == 'edit') {
    $('#cms-banner-slide-text-position').addClass('is-dirty')
    $('#cms-banner-slide-title').addClass('is-dirty')
    $('#cms-banner-slide-subtitle').addClass('is-dirty')
    $('#cms-banner-slide-text').addClass('is-dirty')
    $('#cms-banner-slide-button-text').addClass('is-dirty')
    $('#cms-banner-slide-button-href').addClass('is-dirty')
    $('#cms-banner-slide-rank').addClass('is-dirty')
  }
}