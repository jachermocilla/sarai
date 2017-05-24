Package.describe({
  name: 'sarai:sarai-rainfall-distribution-data',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  var packages = [
    "sarai:sarai-lib"
  ]

  api.use(packages)
  api.imply(packages)

  var lib = [
    "lib/collections/sarai-rainfall-distribution-data.js",
    "lib/collections/sarai-weather-stations2.js",
    // "lib/collections/sarai-cumulative-data.js",
    "lib/collections/sarai-percent-mean-data.js",
    "lib/collections/sarai-historical-daily-rain-data.js"
  ]

  api.addFiles(lib, ["client", "server"])

  var server = [
    "server/methods.js",
    "server/publications.js",

    "server/fixtures/weather-stations2-fixtures.js",
    "server/fixtures/rainfall-distribution-data-fixtures.js",
    "server/fixtures/percent-mean-data-fixtures.js",
    "server/fixtures/historical-daily-rain-data-fixtures.js"
  ]

  api.addFiles(server, "server")

  api.addAssets([
    ], "client")

  api.export([
    "RainfallDistributionData",
    "WeatherStations2",
    "DSSSettings2",
    // "CumulativeData",
    "PercentMeanData",
    "HistoricalDailyRainData"
  ])
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-rainfall-distribution-data');
});
