Package.describe({
  name: 'sarai:sarai-weather-monitoring',
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
    "sarai:sarai-lib",
    "sarai:sarai-user",
    "sarai:sarai-admin",
    "sarai:sarai-layout",
    "sarai:sarai-weather-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/weather-monitoring/weather-monitoring.html",
    "client/components/weather-monitoring/weather-monitoring.js",
    "client/components/weather-monitoring/weather-monitoring.less",
<<<<<<< HEAD
    "client/components/weather-monitoring/route.js",

    "client/components/weather-monitoring/meteogram.html",
    "client/components/weather-monitoring/meteogram.js",
    "client/components/weather-monitoring/sample-data.js"

=======
    "client/components/weather-monitoring/route.js"
>>>>>>> 31d588867b5589e95a4a11471b0547a6034589bb
  ]

  api.addFiles(client, "client")

  api.addAssets([
    //"public/images/pest_banner.png"
    ], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
});
