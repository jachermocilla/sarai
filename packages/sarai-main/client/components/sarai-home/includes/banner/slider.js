Template.Slider.helpers({
  sample: () => {
    console.log(new XMLHttpRequest())
    Meteor.call('getFiles', (error, result) => {
      if (error) {
        console.log('something went wrong')
        console.log(error)
      }
    })
    return 'sample'
  }
})