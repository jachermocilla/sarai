
Meteor.publish('weather-data', () => {
  return WeatherData.find();
});

Meteor.publish('weather-data-30', () => {
  let oneMonthAgo = new Date()
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 2)

  console.log(`Returning ${oneMonthAgo}`)

  return WeatherData.find({dateUTC: { $gt: oneMonthAgo}}, {sort: {dateUTC: -1}});
});

Meteor.publish('weather-stations', () => {
    return WeatherStations.find();
});