Meteor.publish('weather-data', function() {
    return WeatherData.find();
})