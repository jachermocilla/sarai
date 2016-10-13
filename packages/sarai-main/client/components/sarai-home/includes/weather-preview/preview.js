Template.Preview.onCreated(() => {
  // Meteor.subscribe('weather-stations')
})

Template.Preview.helpers({
  dateToday: () => {
    const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const dateToday = weekdays[(new Date()).getDay()]

    return dateToday
  },

  forecastToday: () => {
    return getForecast()[0]
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
  }
})

const getForecast = () => {
  return [
    { head: 'Today', qpf: 22, pop: 80 },
    { head: 'Friday', qpf: 1, pop: 20 },
    { head: 'Saturday', qpf: 3, pop: 80 },
    { head: 'Sunday', qpf: 7, pop: 10 },
    { head: 'Monday', qpf: 12, pop: 100 },
    { head: 'Tuesday', qpf: 8, pop: 30 },
    { head: 'Wednesday', qpf: 5, pop: 90 },
    { head: 'Thursday', qpf: 6, pop: 45 }
  ]
}