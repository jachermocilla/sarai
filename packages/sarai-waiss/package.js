Package.describe({
  name: 'sarai:sarai-waiss',
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
    "sarai:sarai-layout"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
      "client/components/explore/explore.html",
      "client/components/explore/explore.less",
      "client/components/explore/explore-route.js",
      "client/components/explore/explore-helpers.js",
      "client/components/waiss-main/waiss-main.html",
      "client/components/waiss-main/waiss-main.less",
      "client/components/waiss-main/waiss-main-helpers.js",
      "client/components/waiss-main/waiss-main-route.js",
      "client/components/waiss-main/waiss-main-on-created.js",
      "client/components/create-farm/create-farm.html",
      "client/components/create-farm/create-farm.less",
      "client/components/create-farm/create-farm-route.js",
      "client/components/create-farm/create-farm-helpers.js",
      "client/components/create-farm/create-farm-on-created.js",
      "client/components/farm-info/farm-info.html",
      "client/components/farm-info/farm-info-helpers.js",
      "client/components/water-deficit-chart/water-deficit-chart.html",
      "client/components/water-deficit-chart/water-deficit-chart-helpers.js",
      "client/components/advisory/advisory.html",
      "client/components/advisory/advisory.less",
      "client/components/advisory/advisory-helpers.js",
      "client/components/explore-map/explore-map.html",
      "client/components/explore-map/explore-map.less",
      "client/components/explore-map/explore-map-helpers.js"
  ]

  api.addFiles(client, "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-waiss');
});
