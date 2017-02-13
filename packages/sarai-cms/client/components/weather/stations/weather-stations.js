Template.WeatherStationsCMS.onCreated(() => {
  Meteor.subscribe('sarai-weather-stations')
})

Template.WeatherStationsCMS.onRendered(() => {
  initWeatherStationDialog('cms-weather-station-dialog')
})

Template.WeatherStationsCMS.helpers({
  stations: () => {
    const stations = WeatherStations.find({}).fetch()

    return stations
  },

  stationID: () => {
    const stationID = Session.get('weather-station-id')

    return stationID
  }
})

Template.WeatherStationsCMS.events({

})

const initWeatherStationDialog = (dialogID) => {
  const dialog = document.querySelector(`#${dialogID}`)

  dialog.querySelector('.cancel').addEventListener('click', () => {
    dialog.close()
  })

  dialog.querySelector('.save').addEventListener('click', () => {
    const label = $('#cms-ws-label-input').val()

    // Meteor.call('cms-weather-station-edit', label, (error, result) => {
    //   let toast = 'Saved changes to weather station'
    //   if (error) {
    //     toast = 'Unable to save changes'
    //   }
    //   showToast(toast)
    // })
    // dialog.close()
  })
}