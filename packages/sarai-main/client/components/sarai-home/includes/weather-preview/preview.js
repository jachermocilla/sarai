Template.Preview.onCreated(() => {
  Meteor.subscribe('weather-stations')
  Meteor.subscribe('weather-data-30')
  Session.set('stationID', 'ICALABAR6')
})

Template.Preview.events({
  'change #preview-select-station': (e) => {
    const stationID = e.currentTarget.value

    Session.set('stationID', stationID)
  }
})

Template.Preview.helpers({
  dateToday: () => {
    const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const dateToday = weekdays[(new Date()).getDay()]

    return dateToday
  },

  forecastToday: () => {
      let forecastToday = getForecast()[0]
      const stationID = Session.get('stationID')

      const weatherData = WeatherData.find({id: stationID})

      const rainfall = Meteor.previewHelpers.get30DayRainfall(weatherData.fetch())

      forecastToday.today = true
      forecastToday['cumulative'] = rainfall

      return forecastToday
  },

  forecastFirst3: () => {
    //quantitative preciptation forecast
    //probability of precipitation
    const forecast = getForecast()

    return forecast.splice(1, 3)

  },

  forecastNext4: () => {
    const forecast = getForecast()

    return forecast.splice(4, 4)
  },

  weatherStations: () => {
    const stations = WeatherStations.find({}).fetch()

    // if (stations) {
    //   console.log(stations)
    // }
    return stations
  }
})

const getForecast = () => {
  return [
    { head: 'Today', qpf: 22, pop: 80, today: false },
    { head: 'Saturday', qpf: 3, pop: 80, today: false },
    { head: 'Sunday', qpf: 7, pop: 10, today: false },
    { head: 'Monday', qpf: 12, pop: 100, today: false },
    { head: 'Tuesday', qpf: 8, pop: 30, today: false },
    { head: 'Wednesday', qpf: 5, pop: 90, today: false },
    { head: 'Thursday', qpf: 6, pop: 45, today: false },
    { head: 'Friday', qpf: 1, pop: 20, today: false }
  ]
}