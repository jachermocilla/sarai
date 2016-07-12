// Template.HeaderOptions.created = function() {
// }

// Template.HeaderOptions.rendered = function () {
// };

// Template.HeaderOptions.events({

// });

Template.HeaderOptions.helpers({
    myCallbacks: () => {
      return {
        formData: () => {
          return {
            filename: 'main-header-img',
            uploadGroup: 'main'
          }
        },
        finished: (index, fileInfo, context) => {
          Meteor.call('cms-header-icon-update', `${fileInfo.subDirectory}${fileInfo.name}`, (error, result) => {
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