Template.Preview.onCreated(() => {
  Meteor.subscribe('weather-stations')
  Meteor.subscribe('weather-data-30')

  //default is ICALABAR18
  Session.set('stationID', 'ICALABAR18')
  Meteor.subscribe('dss-settings', () => {
    getForecast('ICALABAR18')
  })
})

Template.Preview.events({
  'change #preview-select-station': (e) => {
    const stationID = e.currentTarget.value
    Session.set('stationID', stationID)

    const forecast = getForecast(stationID)
  }
})

Template.Preview.helpers({
  dateToday: () => {
    const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const dateToday = weekdays[(new Date()).getDay()]

    return dateToday
  },

  forecastToday: () => {
      const stationID = Session.get('stationID')
      const forecast = Session.get('forecast')
      const weatherData = WeatherData.find({id: stationID})

      if (forecast && weatherData) {
        let forecastToday = forecast[0]
        const rainfall = Meteor.previewHelpers.get30DayRainfall(weatherData.fetch())

        forecastToday.head = 'Today'
        forecastToday.today = true
        forecastToday['cumulative'] = rainfall

        return forecastToday
      }
  },

  forecastFirst3: () => {
    //quantitative preciptation forecast
    //probability of precipitation
    const forecast = Session.get('forecast')

    return forecast.splice(1, 3)
  },

  forecastNext4: () => {
    const forecast = Session.get('forecast')

    return forecast.splice(4, 4)
  },

  weatherStations: () => {
    const stations = WeatherStations.find({}).fetch()

    return stations
  }
})

const getForecast = (stationID) => {

  const apiKey = DSSSettings.findOne({name: 'wunderground-api-key'}).value

  $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}/forecast10day/q/pws:${stationID}.json`, (result) => {
    // const result = sampleForecast()

    const completeTxtForecast = result.forecast.txt_forecast.forecastday

    const simpleForecast = result.forecast.simpleforecast.forecastday
    let txtForecast = []
    let forecast = []

    for (let a = 0; a < completeTxtForecast.length; a+=2) {
      txtForecast.push(completeTxtForecast[a])
    }

    simpleForecast.forEach((element, index) => {
      forecast.push({ head: txtForecast[index].title, qpf: element.qpf_allday.mm, pop: element.pop })
    })

    Session.set('forecast', forecast)

  })

}