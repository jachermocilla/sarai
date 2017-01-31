Template.PreviewColConcise.onCreated(() => {
  Meteor.subscribe('weather-data-30')
})

Template.PreviewColConcise.onRendered(() => {

})

Template.PreviewColConcise.helpers({
  accumulatedRain: (stationID) => {
    const weatherData = WeatherData.find({id: stationID})

<<<<<<< HEAD
    // console.log(stationID)
    // console.log(weatherData.fetch())
    console.log(stationID)
    console.log(weatherData.fetch())

=======
>>>>>>> 8bafe98f45586038ca70ccd01af295db6bac4ece
    if (weatherData) {
      const rainfall = Meteor.previewHelpers.get30DayRainfall(weatherData.fetch())
      return rainfall
    }

  },

  format: (label) => {
    const newLabel = Meteor.previewHelpers.formatLabel(label)
    return newLabel
  },

  idSuffix: (label) => {
    const suffix = label.replace(/ /g, '-').toLowerCase()

    return suffix
  }
})

Template.PreviewColConcise.events({

})