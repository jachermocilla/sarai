
Meteor.publish('weather-data', function(id) {
  return WeatherData.find();
});

Meteor.publish('weather-data-30', function(id) {
    return WeatherData.find({id}, {sort: {dateUTC: -1}, limit: 30});
});

Meteor.publish('weather-stations', function() {
    return WeatherStations.find();
});