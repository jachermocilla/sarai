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
      const name = $('#cms-banner-link-name-input').val()
      const href = $('#cms-banner-link-href-input').val()

      const newLink = { name, href }

      const linkAction = Session.get('linkAction')

      if (linkAction == 'Add Top Level Link') {

        const newLinkEntry = {
          name, href,
          links: [],
          id: name.replace(/ /g , "-").toLowerCase()
        }

        record.links.push(newLinkEntry)
      } else if (linkAction == 'Add Sub Link') {
        const indices = Session.get('id').split('-')

        if (record.links[parseInt(indices[1])].links) {
          record.links[parseInt(indices[1])].links.push(newLink)
        } else {
          record.links[parseInt(indices[1])].links = [newLink]
        }

      } else if (linkAction == 'Edit Link') {
        const indices = Session.get('id').split('-')

        if (indices.length == 1) {
          //Top level link
          record.links[parseInt(indices[0])].name = newLink.name
          record.links[parseInt(indices[0])].href = newLink.href
        }

        else {
          //Sub link
          record.links[parseInt(indices[0])].links[parseInt(indices[1])] = newLink
        }
      }


      Meteor.call('cms-header-links-update', record.links, (error, result) => {
        let toast = 'Saved'
        if (error) {
          toast = 'Unable to save changes'
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
    console.log('here')

    const id = e.currentTarget.id
    Session.set('linkAction', 'Edit Link')
    Session.set('id', id)
    console.log(id)

    const indices = id.split('-')
    const record = Main.findOne({name: 'mainHeader'})
    let name = ''
    let href = ''

    if (record) {
      if (indices.length == 1) {
        //Top level link
        name = record.links[parseInt(indices[0])].name
        href = record.links[parseInt(indices[0])].href
      } else {
        //Sub link
        name = record.links[parseInt(indices[0])].links[parseInt(indices[1])].name
        href = record.links[parseInt(indices[0])].links[parseInt(indices[1])].href
      }
    }

    const dialog = document.querySelector('.cms-header-edit-dialog');
    dialog.showModal();

    $('#cms-banner-link-name').addClass('is-dirty')
    $('#cms-banner-link-href').addClass('is-dirty')

    $('#cms-banner-link-name-input').val(name)
    $('#cms-banner-link-href-input').val(href)
  },

  'click .cms-header-link-delete': (e) => {
    const id = e.currentTarget.id
    const indices = id.split('-')
    const record = Main.findOne({name: 'mainHeader'})

    if (record) {
      if (indices.length == 1) {
        //Top level link
        if (record.links[parseInt(indices[0])].links && record.links[parseInt(indices[0])].links.length > 0) {
          showToast('Can\'t delete link with sublinks')
          return
        }
        record.links.splice(parseInt(indices[0]), 1)
      } else {
        //Sub link
        record.links[parseInt(indices[0])].links.splice(parseInt(indices[1]), 1)
      }
    }

    Meteor.call('cms-header-links-update', record.links, (error, result) => {
      let toast = 'Deleted link'
      if (error) {
        toast = 'Unable to delete link'
      }
      showToast(toast)
    })
  },

  'click .cms-header-link-add': (e) => {
    const id = e.currentTarget.id

    if (id == 'add-top-level-link') {
      Session.set('linkAction', 'Add Top Level Link')
    } else {
      Session.set('id', id)
      Session.set('linkAction', 'Add Sub Link')
    }

    const dialog = document.querySelector('.cms-header-edit-dialog');
    dialog.showModal();

    $('#cms-banner-link-name-input').val("")
    $('#cms-banner-link-href-input').val("")
  }

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

  linkAction: () => {
    return Session.get('linkAction')
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