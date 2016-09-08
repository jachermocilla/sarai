Template.ServicesCMSEditForm.onCreated(() => {
  this.uploadedFile = ''
})

Template.ServicesCMSEditForm.onRendered((a, template) => {

  // console.log(Template.instance().data) // the service in data is undefined at this point. weird
  // console.log(this)
  $('#cms-service-col1text-editor').summernote();
  $('#cms-service-col2text-editor').summernote();

  //This tracker only works on the first render. Subsequent refreshes have to rely on the helpers. WEIRD.
  Tracker.autorun(() => {
    if (Template.instance().data.service) {
      $('#cms-service-col1text-editor').code(Template.instance().data.service.col1.content);
    }
  });

  Tracker.autorun(() => {
    if (Template.instance().data.service) {
      $('#cms-service-col2text-editor').code(Template.instance().data.service.col2.content);
    }
  });

  this.serviceID = FlowRouter.current().params._id
})

Template.ServicesCMSEditForm.events({

  'click  #cms-services-save-edit': (event, template) => {

    const title = $('#cms-service-title-input').val()
    const tagline = $('#cms-service-tagline-input').val()
    const thumbnail = this.uploadedFile == '' ? template.data.service.thumbnail : this.uploadedFile
    const info = {
      crops: $('#cms-service-crops-input').val(),
      experts: CSVToArray($('#cms-service-experts-input').val()),
      ura: CSVToArray($('#cms-service-ura-input').val()),
      projectLeaders: CSVToArray($('#cms-service-leaders-input').val())
    }
    const media = {
      link: '',
      type: 'image',
      subtitle: $('#cms-service-subtitle-input').val(),
      subtitleLink: $('#cms-service-subtitleLink-input').val()
    }
    const col1 = {
      title: '',
      content: $('#cms-service-col1text-editor').code()
    }
    const col2 = {
      title: '',
      content: $('#cms-service-col2text-editor').code()
    }

    Meteor.call('cms-service-update', this.serviceID, title, tagline, thumbnail, info, media, col1, col2, (error, result) => {

      if (!error) {
        Session.set('toast', 'Successfully Updated Service')
        FlowRouter.redirect('/admin/services')
      } else {
        showToast('Unable to update service')
      }
    })

  },

  'click #cms-services-delete': (event, template) => {

  },

  'click #media-image-choice': () => {
    console.log('selecting image')
    $('#cms-service-youtube').attr('display', 'none')
    $('#cms-service-image').attr('display', 'block')
  },

  'click #media-youtube-choice': () => {
    console.log('selecting video')
    $('#cms-service-image').attr('display', 'none')
    $('#cms-service-youtube').attr('display', 'block')
  }

})

Template.ServicesCMSEditForm.helpers({
  crops: () => {
    if (Template.instance().data.service && Template.instance().data.service.info[0]) {
      return Template.instance().data.service.info.crops
    }
  },

  col1Text: () => {
    if (Template.instance().data.service) {
      $('#cms-service-col1text-editor').code(Template.instance().data.service.col1.content);
    }
  },

  col2Text: () => {
    if (Template.instance().data.service) {
      $('#cms-service-col2text-editor').code(Template.instance().data.service.col2.content);
    }
  },

  mediaLinkInputTitle: () => {
    if ($('#media-image-choice').is(':checked')) {
      return 'Image'
    } else {
      return 'Youtube link'
    }
  },

  arrayToCSV: (array) => {
    if (array) {
      return array.reduce((prev, curr) => {
        return `${prev}; ${curr}`
      })
    }
  },

  //===========CLASS HELPERS ================
  infoCellClasses : () => {
    return {
      class: 'mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
    }
  },

  tooltip: () => {
    return 'Tip: Separate items with a semicolon (;)'
  },

  myCallbacks: () => {
    return {
      formData: () => {
        return {
          filename: `service-media-${Random.id()}`,
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        this.uploadedFile = `${uploadDirPrefix()}${fileInfo.path}`

        $('#cms-service-thumbnail').attr('src', `${uploadDirPrefix()}${fileInfo.path}`)
      }
    }
  }
})