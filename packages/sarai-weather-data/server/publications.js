Meteor.publish('weather-data', function() {
    return WeatherData.find();
});

Meteor.publish('weather-stations', function() {
    return WeatherStations.find();
});