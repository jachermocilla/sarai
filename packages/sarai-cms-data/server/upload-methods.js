Meteor.methods({

  'cms-delete-image': (path) => {
    const arr = path.split('/')
    let newPath = ''

    for (let a = 2; a < arr.length; a++) {
      if (arr[a] != '') {
        newPath += '/' + arr[a]
      }
    }

    if (newPath != '') {
      UploadServer.delete(newPath)
    }
  }
})