Template.WeatherStationsCMS.onCreated(() => {
  Meteor.subscribe('sarai-weather-stations')
})

Template.WeatherStationsCMS.helpers({
  stations: () => {
    const stations = WeatherStations.find({}).fetch()

    return stations
  }
})