/**
 * Publish all Suitability Maps
 */
Meteor.publish('main', function () {
  return Main.find();
});

Meteor.publish('provinces', function () {
  return Provinces.find();
});

Meteor.publish('regions', function () {
  return Regions.find();
});

Meteor.publish('weather-outlook', function () {
  return WeatherOutlook.find();
});