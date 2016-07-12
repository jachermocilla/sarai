// Template.HeaderOptions.created = function() {
// }

Template.HeaderOptions.onRendered(() => {
  const dialog = document.querySelector('dialog.cms-header-edit-dialog');

  dialog.querySelector('.cancel').addEventListener('click', () => {
      dialog.close();
    });

  dialog.querySelector('.save').addEventListener('click', () => {

    const record = Main.findOne({name: 'mainHeader'})

    if (record) {
      const id = Session.get('id')
      const indices = id.split('-')
      const name = $('#cms-banner-link-name-input').val()
      const href = $('#cms-banner-link-href-input').val()

      if (indices.length == 1) {
        //Top level link
        record.links[parseInt(indices[0])].name = name
        record.links[parseInt(indices[0])].href = href
      }

      else {
        //Sub link
        record.links[parseInt(indices[0])].links[parseInt(indices[1])].name = name
        record.links[parseInt(indices[0])].links[parseInt(indices[1])].href = href
      }

      Meteor.call('cms-header-links-update', record.links, (error, result) => {
        let toast = 'Link Updated'
        if (error) {
          toast = 'Unable to save changes to link'
        }

        dialog.close();
        showToast(toast)
      })
    }

  })

  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
});

Template.HeaderOptions.events({
  'click .cms-header-link-edit': (e) => {
    const id = e.currentTarget.id
    Session.set('linkAction', 'edit')
    Session.set('id', id)

    const indices = id.split('-')
    const record = Main.findOne({name: 'mainHeader'})
    let name = ''
    let href = ''

    if (indices.length == 1) {
      //Top level link
      if (record) {
        name = record.links[parseInt(indices[0])].name
        href = record.links[parseInt(indices[0])].href
      }

    } else {
      //Sub link
      if (record) {
        name = record.links[parseInt(indices[0])].links[parseInt(indices[1])].name
        href = record.links[parseInt(indices[0])].links[parseInt(indices[1])].href
      }
    }

    const dialog = document.querySelector('.cms-header-edit-dialog');
    dialog.showModal();

    $('#cms-banner-link-name').addClass('is-dirty')
    $('#cms-banner-link-href').addClass('is-dirty')

    dialog.querySelector('#cms-banner-link-name-input').value = name
    dialog.querySelector('#cms-banner-link-href-input').value = href
  },

});

Template.HeaderOptions.helpers({

  icon: () => {
    const record = Main.findOne({name: 'mainHeader'})

    return record && record.img
  },

  links: () => {
    const record = Main.findOne({name: 'mainHeader'})

    if (record) {
      return record.links
    }
  },

  myCallbacks: () => {
    return {
      formData: () => {
        return {
          filename: 'main-header-img',
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        Meteor.call('cms-header-icon-update', `${fileInfo.name}`, (error, result) => {
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