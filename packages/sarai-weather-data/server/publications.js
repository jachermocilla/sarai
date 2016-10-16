
Meteor.publish('weather-data', () => {
  return WeatherData.find();
});

Meteor.publish('weather-data-30', () => {
  let oneMonthAgo = new Date()
  // oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 31)

  return WeatherData.find({dateUTC: { $gt: oneMonthAgo}}, {sort: {dateUTC: -1}});
});

Meteor.publish('weather-stations', () => {
    return WeatherStations.find();
});

Meteor.publish('dss-settings', () => {
  return DSSSettings.find();
})