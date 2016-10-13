Template.PreviewControls.onCreated(() => {
  Meteor.subscribe('weather-stations', () => {
    console.log('Stations ready...')
  })
})

Template.PreviewControls.helpers({
  weatherStations: () => {
    const stations = WeatherStations.find({}).fetch()

    // if (stations) {
    //   console.log(stations)
    // }
    return stations
  }
})