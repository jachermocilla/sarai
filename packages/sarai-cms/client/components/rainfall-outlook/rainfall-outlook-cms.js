Template.RainfallOutlookCMS.helpers({
  message: function() {
    return 'sample'
  },

  myCallbacks: () => {
    return {
      formData: () => {
        return {
          filename: `rainfall-${Random.id()}`,
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        this.uploadedFile = `/opt/sarai-uploads/${fileInfo.path}`
        console.log(`${fileInfo}`)
        console.log(`saved to ${uploadDirPrefix()}${fileInfo.path}`)

        Meteor.call('cms-rainfall-outlook-content-update', this.uploadedFile, (error, result) => {
          let toast = 'File uploaded successfully'
          if (error) {
            toast = 'Unable to upload file'
          }
          showToast(toast)
        })
      }
    }
  }

})

Template.RainfallOutlookCMS.onCreated(function() {
  Meteor.subscribe('rainfall-outlook');

})