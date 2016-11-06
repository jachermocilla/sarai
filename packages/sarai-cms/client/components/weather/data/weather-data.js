Template.WeatherDataCMS.onCreated(() => {
  this.stationID = FlowRouter.current().params.stationID
  Meteor.subscribe('weather-data-30-by-id', this.stationID )
  Meteor.subscribe('weather-station', this.stationID)
})

Template.WeatherDataCMS.helpers({
  stationID: () => {
    return this.stationID
  },

  label: () => {
    const record = WeatherStations.findOne({})

    return record && record.label
  },

  records: () => {
    const records = WeatherData.find({})

    return records
  }
})