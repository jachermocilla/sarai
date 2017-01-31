Template.WeatherStationRow.events({
  'click #edit-weather-station': function() {
    Session.set('weather-station-id', this.id)

    const dialog = document.querySelector('#cms-weather-station-dialog')

    fillWeatherStationDialog(this._id)

    dialog.showModal()
  }
})

const fillWeatherStationDialog = (stationID) => {
  $('#cms-ws-label').addClass('is-dirty')

  Meteor.subscribe('weather-station', stationID, () => {
    const record = WeatherStations.findOne()

    $('#cms-ws-label-input').val(record.label)
  })
}