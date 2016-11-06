Template.WeatherStationsBlock.onCreated(() => {
  Meteor.subscribe('weather-stations')
})

Template.WeatherStationsBlock.helpers({
  numberOfStations: () => {
    const count = WeatherStations.find({}).count()

    return count
  },

  stations: () => {
    const stations = WeatherStations.find({})

    return stations
  }
})