Template.SaraiSuitabilityGallery.onRendered(() => {
  const region = Session.get('region')
  $('#preview-select-region').val(region)

  const province = Session.get('province')
  $('#preview-select-province').val(province)

  // const dialog = document.querySelector('#suitability-dialog')

  // dialog.querySelector('.cancel').addEventListener('click', () => {
  //   dialog.close();
  // });

  // Tracker.autorun(() => {
  //   const stationID = FlowRouter.getParam('stationID')
  //   if (stationID) {
  //     Meteor.subscribe('suitability-gallery', () => {
  //       const station = WeatherStations.findOne({id: stationID})
  //       // $('#accumulated-rainfall-dialog-title').html(`Accumulated Rainfall for ${Meteor.Rainfall.stripTitle(station.label)}`)
  //     })

  //     displayRainData(stationID)

  //     if (!$('#accumulated-rainfall-dialog').is(':visible')) {
  //       dialog.showModal()
  //     }
  //   }
  // })
})